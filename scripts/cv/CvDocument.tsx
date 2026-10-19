import React from "react";
import { Defs, Document, Link, LinearGradient, Page, Rect, Stop, StyleSheet, Svg, Text, View } from "@react-pdf/renderer";
import type { Resume } from "../../src/data/resume";

// Print palette: same brand hues as the site, darkened for contrast on white paper.
const color = {
  ink: "#0F172A",
  body: "#334155",
  muted: "#64748B",
  rule: "#E2E8F0",
  accent: "#5B3FD0",
  accentSoft: "#F1EEFD",
};

const PAGE_WIDTH = 595.28; // A4 in points

// react-pdf quirks (verified with @react-pdf/renderer 4.9.0):
// - lineHeight on the Page or a wrapping View silently drops the fixed footer,
//   so it is set on each Text style instead.
// - A unitless lineHeight is resolved against the Text's *own* fontSize
//   (default 18pt), so every style using `lh` must also set fontSize.
const BODY_SIZE = 8.8;
const lh = { lineHeight: 1.35 };

const styles = StyleSheet.create({
  page: {
    paddingTop: 32,
    paddingBottom: 40,
    paddingHorizontal: 42,
    fontFamily: "Inter",
    fontSize: BODY_SIZE,
    color: color.body,
  },
  topBar: { position: "absolute", top: 0, left: 0, right: 0 },

  // Header: name and roles on the left, contact details on the right
  header: { flexDirection: "row", justifyContent: "space-between", alignItems: "flex-start" },
  name: { fontFamily: "Space Grotesk", fontWeight: 700, fontSize: 26, color: color.ink, lineHeight: 1.1 },
  nameAccent: { color: color.accent },
  roles: { ...lh, marginTop: 5, fontSize: 11, fontWeight: 500, color: color.body },
  contact: { alignItems: "flex-end", paddingTop: 2 },
  contactItem: { fontSize: 8.2, color: color.muted, lineHeight: 1.45 },
  contactLink: { color: color.muted, textDecoration: "none" },

  // Profile + highlights
  profile: { flexDirection: "row", marginTop: 16, gap: 18 },
  summary: { flex: 1, fontSize: 9.3, lineHeight: 1.5 },
  highlights: { width: 124, gap: 4 },
  highlight: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: color.accentSoft,
    borderRadius: 4,
    paddingVertical: 2.5,
    paddingHorizontal: 8,
  },
  highlightValue: { ...lh, fontFamily: "Space Grotesk", fontWeight: 700, fontSize: 12.5, color: color.accent, width: 28 },
  highlightLabel: { ...lh, fontSize: 7.8, color: color.body, flex: 1 },

  // Sections
  section: { marginTop: 12 },
  sectionHeading: { flexDirection: "row", alignItems: "center", marginBottom: 7 },
  sectionTitle: {
    ...lh,
    fontFamily: "Space Grotesk",
    fontWeight: 700,
    fontSize: 10,
    letterSpacing: 1.4,
    textTransform: "uppercase",
    color: color.accent,
    marginRight: 8,
  },
  sectionRule: { flex: 1, height: 0.75, backgroundColor: color.rule },

  // Experience
  job: { marginBottom: 8 },
  row: { flexDirection: "row", justifyContent: "space-between", alignItems: "baseline" },
  jobTitle: { ...lh, fontFamily: "Space Grotesk", fontWeight: 600, fontSize: 10.8, color: color.ink },
  period: { ...lh, fontSize: 8.2, fontWeight: 500, color: color.muted },
  company: { ...lh, fontSize: 9.3, fontWeight: 600, color: color.accent, marginTop: 0.5 },
  location: { fontWeight: 400, color: color.muted },
  bullets: { marginTop: 3 },
  bullet: { flexDirection: "row", marginBottom: 1 },
  bulletDot: { width: 3, height: 3, borderRadius: 1.5, backgroundColor: color.accent, marginTop: 4.6, marginRight: 7 },
  bulletText: { ...lh, fontSize: BODY_SIZE, flex: 1 },
  tech: { ...lh, marginTop: 3, fontSize: 7.8, color: color.muted },
  techLabel: { fontWeight: 600, color: color.body },

  // Skills
  skillGrid: { flexDirection: "row", flexWrap: "wrap", justifyContent: "space-between" },
  skillGroup: { width: "48.5%", marginBottom: 7 },
  skillTitle: { ...lh, fontFamily: "Space Grotesk", fontWeight: 600, fontSize: 9.3, color: color.ink, marginBottom: 1 },
  skillList: { ...lh, fontSize: 8.3 },

  // Education
  edu: { marginBottom: 7 },
  eduDegree: { ...lh, fontFamily: "Space Grotesk", fontWeight: 600, fontSize: 9.8, color: color.ink, flex: 1, paddingRight: 12 },
  eduInstitution: { ...lh, fontSize: 8.8, color: color.accent, fontWeight: 500 },
  eduDescription: { ...lh, fontSize: 8.3, color: color.muted, marginTop: 0.5 },
  eduCompact: { ...lh, fontSize: 8.6, color: color.body, flex: 1, paddingRight: 12 },
  eduCompactDegree: { fontWeight: 600, color: color.ink },

  // Languages
  languages: { flexDirection: "row", flexWrap: "wrap" },
  language: { ...lh, fontSize: BODY_SIZE, marginRight: 22 },
  languageName: { fontWeight: 600, color: color.ink },

  footer: {
    position: "absolute",
    bottom: 18,
    left: 42,
    right: 42,
    flexDirection: "row",
    justifyContent: "space-between",
    fontSize: 7.5,
    color: color.muted,
  },
});

// "2020 - present" -> "2020 – Present"
const formatPeriod = (period: string) =>
  period.replace(/\s*-\s*/, " – ").replace(/present/i, "Present");

const url = (value: string) => (value.startsWith("http") ? value : `https://${value}`);

// Strip protocol and trailing slash for display: "linkedin.com/in/flo-ragossnig-44b74aa3"
const prettyUrl = (value: string) => value.replace(/^https?:\/\//, "").replace(/\/$/, "");

// Rendered inside the first entry of each section (which uses wrap={false}),
// so a heading can never end up alone at the bottom of a page.
const SectionHeading: React.FC<{ title: string }> = ({ title }) => (
  <View style={styles.sectionHeading}>
    <Text style={styles.sectionTitle}>{title}</Text>
    <View style={styles.sectionRule} />
  </View>
);

const TopBar: React.FC = () => (
  <Svg style={styles.topBar} width={PAGE_WIDTH} height={5} fixed>
    <Defs>
      <LinearGradient id="brand" x1="0" y1="0" x2="1" y2="0">
        <Stop offset="0" stopColor="#7E69E8" />
        <Stop offset="1" stopColor="#1EAEDB" />
      </LinearGradient>
    </Defs>
    <Rect x="0" y="0" width={PAGE_WIDTH} height="5" fill="url(#brand)" />
  </Svg>
);

export const CvDocument: React.FC<{ resume: Resume; date?: Date }> = ({ resume, date }) => {
  const [firstName, ...rest] = resume.name.split(" ");
  const roles = resume.title.split("|").map((role) => role.trim());
  const { contact } = resume;

  const contactItems: { label: string; href?: string }[] = [
    { label: contact.email, href: `mailto:${contact.email}` },
    ...(contact.phone ? [{ label: contact.phone, href: `tel:${contact.phone.replace(/[^\d+]/g, "")}` }] : []),
    ...(contact.location ? [{ label: contact.location }] : []),
    ...[contact.website, contact.linkedin, contact.github]
      .filter((link): link is string => Boolean(link))
      .map((link) => ({ label: prettyUrl(link), href: url(link) })),
  ];

  const keywords = [...resume.skills.flatMap((group) => group.skills), ...(resume.additionalSkills ?? [])];

  return (
    <Document
      title={`${resume.name} – CV`}
      author={resume.name}
      subject={resume.title.replace(/\s*\|\s*/g, ", ")}
      keywords={keywords.join(", ")}
      creator={contact.website ?? resume.name}
      producer={contact.website ?? resume.name}
      language="en"
      creationDate={date}
      modificationDate={date}
    >
      <Page size="A4" style={styles.page}>
        <TopBar />
        <View style={styles.footer} fixed>
          <Text>{`${resume.name}  ·  Curriculum Vitae`}</Text>
          <Text render={({ pageNumber, totalPages }) => `${pageNumber} / ${totalPages}`} />
        </View>

        {/* Header */}
        <View style={styles.header}>
          <View>
            <Text style={styles.name}>
              {firstName} <Text style={styles.nameAccent}>{rest.join(" ")}</Text>
            </Text>
            <Text style={styles.roles}>{roles.join("  ·  ")}</Text>
          </View>
          <View style={styles.contact}>
            {contactItems.map((item) => (
              <Text key={item.label} style={styles.contactItem}>
                {item.href ? (
                  <Link src={item.href} style={styles.contactLink}>
                    {item.label}
                  </Link>
                ) : (
                  item.label
                )}
              </Text>
            ))}
          </View>
        </View>

        {/* Profile */}
        <View style={styles.profile}>
          <Text style={styles.summary}>{resume.summary}</Text>
          <View style={styles.highlights}>
            {resume.highlights.map((item) => (
              <View key={item.label} style={styles.highlight}>
                <Text style={styles.highlightValue}>{item.value}</Text>
                <Text style={styles.highlightLabel}>{item.label}</Text>
              </View>
            ))}
          </View>
        </View>

        {/* Experience */}
        <View style={styles.section}>
          {resume.experience.map((job, index) => (
            // wrap={false} keeps each role on a single page
            <View key={`${job.company}-${job.title}`} style={styles.job} wrap={false}>
              {index === 0 && <SectionHeading title="Experience" />}
              <View style={styles.row}>
                <Text style={styles.jobTitle}>{job.title}</Text>
                <Text style={styles.period}>{formatPeriod(job.period)}</Text>
              </View>
              <Text style={styles.company}>
                {job.company}
                {job.location && <Text style={styles.location}>{`  ·  ${job.location}`}</Text>}
              </Text>
              <View style={styles.bullets}>
                {job.description.map((point) => (
                  <View key={point} style={styles.bullet}>
                    <View style={styles.bulletDot} />
                    <Text style={styles.bulletText}>{point}</Text>
                  </View>
                ))}
              </View>
              {job.technologies && job.technologies.length > 0 && (
                <Text style={styles.tech}>
                  <Text style={styles.techLabel}>Tech: </Text>
                  {job.technologies.join(", ")}
                </Text>
              )}
            </View>
          ))}
        </View>

        {/* Skills */}
        <View style={styles.section} wrap={false}>
          <SectionHeading title="Skills" />
          <View style={styles.skillGrid}>
            {resume.skills.map((group) => (
              <View key={group.id} style={styles.skillGroup}>
                <Text style={styles.skillTitle}>{group.title}</Text>
                <Text style={styles.skillList}>{group.skills.join(", ")}</Text>
              </View>
            ))}
            {resume.additionalSkills && resume.additionalSkills.length > 0 && (
              <View style={[styles.skillGroup, { width: "100%" }]}>
                <Text style={styles.skillTitle}>Also worked with</Text>
                <Text style={styles.skillList}>{resume.additionalSkills.join(", ")}</Text>
              </View>
            )}
          </View>
        </View>

        {/* Education: degrees in full, cvOnly entries (earlier studies) as one-liners */}
        <View style={styles.section}>
          {resume.education.map((edu, index) => (
            <View key={`${edu.institution}-${edu.period}`} style={styles.edu} wrap={false}>
              {index === 0 && <SectionHeading title="Education" />}
              {edu.cvOnly ? (
                <View style={styles.row}>
                  <Text style={styles.eduCompact}>
                    <Text style={styles.eduCompactDegree}>{edu.degree}</Text>
                    {`  ·  ${edu.institution}`}
                  </Text>
                  <Text style={styles.period}>{formatPeriod(edu.period)}</Text>
                </View>
              ) : (
                <>
                  <View style={styles.row}>
                    <Text style={styles.eduDegree}>{edu.degree}</Text>
                    <Text style={styles.period}>{formatPeriod(edu.period)}</Text>
                  </View>
                  <Text style={styles.eduInstitution}>{edu.institution}</Text>
                  {edu.description && <Text style={styles.eduDescription}>{edu.description}</Text>}
                </>
              )}
            </View>
          ))}
        </View>

        {/* Languages */}
        {resume.languages.length > 0 && (
          <View style={styles.section} wrap={false}>
            <SectionHeading title="Languages" />
            <View style={styles.languages}>
              {resume.languages.map((language) => (
                <Text key={language.name} style={styles.language}>
                  <Text style={styles.languageName}>{language.name}</Text>
                  {`  ${language.level}`}
                </Text>
              ))}
            </View>
          </View>
        )}
      </Page>
    </Document>
  );
};

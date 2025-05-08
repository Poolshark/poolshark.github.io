
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase } from "lucide-react";
import { resume } from "@/data/resume";

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20">
      <div className="container">
        <div className="flex items-center gap-4 mb-10">
          <Briefcase className="h-6 w-6 text-primary" />
          <h2 className="text-3xl font-bold">Work Experience</h2>
        </div>
        <div className="space-y-8">
          {resume.experience.map((job, index) => (
            <Card key={index} className="border border-border bg-card/50 card-hover overflow-hidden">
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                  <CardTitle>{job.title}</CardTitle>
                  <span className="text-sm text-muted-foreground">{job.period}</span>
                </div>
                <div className="text-lg text-primary">{job.company}</div>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-2 mb-4">
                  {job.description.map((point, i) => (
                    <li key={i} className="text-muted-foreground">{point}</li>
                  ))}
                </ul>
                {job.technologies && (
                  <div className="flex flex-wrap gap-2 mt-4">
                    {job.technologies.map((tech, i) => (
                      <Badge key={i} variant="secondary">{tech}</Badge>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;

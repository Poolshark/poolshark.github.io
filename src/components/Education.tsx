
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Laptop } from "lucide-react";
import { resume } from "@/data/resume";

const Education: React.FC = () => {
  return (
    <section className="py-20">
      <div className="container">
        <div className="flex items-center gap-4 mb-10">
          <Laptop className="h-6 w-6 text-primary" />
          <h2 className="text-3xl font-bold">Education</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {resume.education.map((edu, index) => (
            <Card key={index} className="border border-border bg-card/50 card-hover">
              <CardHeader>
                <div className="flex flex-col gap-1">
                  <CardTitle>{edu.degree}</CardTitle>
                  <div className="text-lg text-primary">{edu.institution}</div>
                  <div className="text-sm text-muted-foreground">{edu.period}</div>
                </div>
              </CardHeader>
              {edu.description && (
                <CardContent>
                  <p className="text-muted-foreground">{edu.description}</p>
                </CardContent>
              )}
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;

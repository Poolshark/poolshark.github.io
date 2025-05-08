
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Code } from "lucide-react";
import { resume } from "@/data/resume";

const Skills: React.FC = () => {
  // Group skills by category
  const skillCategories = resume.skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {} as Record<string, typeof resume.skills>);

  // Format category names for display
  const formatCategoryName = (name: string) => {
    return name.charAt(0).toUpperCase() + name.slice(1);
  };

  return (
    <section id="skills" className="py-20 bg-card/30">
      <div className="container">
        <div className="flex items-center gap-4 mb-10">
          <Code className="h-6 w-6 text-primary" />
          <h2 className="text-3xl font-bold">Skills & Expertise</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {Object.entries(skillCategories).map(([category, skills]) => (
            <Card key={category} className="border border-border bg-card/50 card-hover">
              <CardHeader>
                <CardTitle>{formatCategoryName(category)}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {skills.map((skill) => (
                  <div key={skill.name} className="space-y-1">
                    <div className="flex justify-between items-center">
                      <span>{skill.name}</span>
                      {skill.level && (
                        <span className="text-xs text-muted-foreground">
                          {skill.level}/10
                        </span>
                      )}
                    </div>
                    {skill.level && (
                      <Progress value={skill.level * 10} className="h-2" />
                    )}
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

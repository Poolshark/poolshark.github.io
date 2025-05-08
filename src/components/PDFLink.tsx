
import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Download, FileText } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const PDFLink: React.FC = () => {
  const { toast } = useToast();
  const [pdfURL, setPdfURL] = useState<string | null>(null);

  // This is a placeholder for a real PDF
  // In a real application, you would likely have a real PDF file in your public folder
  useEffect(() => {
    // Create a simple PDF Data URL for demonstration
    // Note: In a real application, you should place your actual CV in the public folder
    const samplePDF = "data:application/pdf;base64,JVBERi0xLjcKJeLjz9MKNSAwIG9iago8PCAvVHlwZSAvWEZ...";
    setPdfURL("/cv.pdf"); // This should point to your actual CV
  }, []);

  const handleDownload = () => {
    if (pdfURL) {
      // This is where you would implement the actual download
      // For a real application with a file in the public folder, this link will work
      toast({
        title: "Download Started",
        description: "Your CV is being downloaded",
      });
    } else {
      toast({
        title: "Error",
        description: "CV not available for download at this time",
        variant: "destructive",
      });
    }
  };

  return (
    <Button onClick={handleDownload} className="flex items-center gap-2">
      <Download className="h-4 w-4" />
      <span>Download CV</span>
    </Button>
  );
};

export default PDFLink;

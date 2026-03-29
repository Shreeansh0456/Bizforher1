
import React from 'react';
import { Button } from '@/components/ui/button';
import { FileText, Download } from 'lucide-react';

interface PDFDownloadButtonProps {
  title: string;
  url: string;
  variant?: 'default' | 'outline' | 'secondary';
  size?: 'default' | 'sm' | 'lg';
  className?: string;
}

const PDFDownloadButton: React.FC<PDFDownloadButtonProps> = ({
  title,
  url,
  variant = 'outline',
  size = 'default',
  className = ''
}) => {
  const handleDownload = () => {
    // Convert Google Drive view link to direct download link
    const fileId = url.match(/\/d\/([a-zA-Z0-9-_]+)/)?.[1];
    if (fileId) {
      const downloadUrl = `https://drive.google.com/uc?export=download&id=${fileId}`;
      window.open(downloadUrl, '_blank');
    } else {
      window.open(url, '_blank');
    }
  };

  return (
    <Button
      onClick={handleDownload}
      variant={variant}
      size={size}
      className={`group ${className}`}
    >
      <FileText className="w-4 h-4 mr-2" />
      {title}
      <Download className="w-4 h-4 ml-2 transition-transform group-hover:translate-y-1" />
    </Button>
  );
};

export default PDFDownloadButton;

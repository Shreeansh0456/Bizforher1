import React from 'react';

interface ArticleRendererProps {
  markdown: string;
}

// Minimal markdown renderer — headings, bold, tables, code, blockquotes, lists, paragraphs
const ArticleRenderer: React.FC<ArticleRendererProps> = ({ markdown }) => {
  const lines = markdown.split('\n');
  const elements: React.ReactNode[] = [];
  let i = 0;

  const parseInline = (text: string): React.ReactNode => {
    // bold **, italic *, inline code `
    const parts = text.split(/(\*\*[^*]+\*\*|`[^`]+`|\*[^*]+\*)/g);
    return parts.map((part, idx) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        return <strong key={idx} className="font-bold text-[#1c2939] dark:text-[#faf5ef]">{part.slice(2, -2)}</strong>;
      }
      if (part.startsWith('`') && part.endsWith('`')) {
        return <code key={idx} className="bg-[#d9cfcd]/40 dark:bg-[#2d3f5a] px-1.5 py-0.5 rounded text-sm font-mono text-[#db8a6c]">{part.slice(1, -1)}</code>;
      }
      if (part.startsWith('*') && part.endsWith('*')) {
        return <em key={idx} className="italic">{part.slice(1, -1)}</em>;
      }
      return part;
    });
  };

  while (i < lines.length) {
    const line = lines[i];

    // Skip empty lines
    if (line.trim() === '') {
      i++;
      continue;
    }

    // Headings
    if (line.startsWith('### ')) {
      elements.push(
        <h3 key={i} className="text-xl font-bold text-[#1c2939] dark:text-[#faf5ef] mt-8 mb-3">
          {parseInline(line.slice(4))}
        </h3>
      );
      i++;
      continue;
    }

    if (line.startsWith('## ')) {
      elements.push(
        <h2 key={i} className="text-2xl font-bold text-[#1c2939] dark:text-[#faf5ef] mt-10 mb-4 pb-2 border-b border-[#d9cfcd] dark:border-[#2d3f5a]">
          {parseInline(line.slice(3))}
        </h2>
      );
      i++;
      continue;
    }

    // Horizontal rule
    if (line.trim() === '---') {
      elements.push(<hr key={i} className="my-8 border-[#d9cfcd] dark:border-[#2d3f5a]" />);
      i++;
      continue;
    }

    // Blockquote
    if (line.startsWith('> ')) {
      elements.push(
        <blockquote key={i} className="border-l-4 border-[#db8a6c] pl-4 py-1 my-4 bg-[#db8a6c]/5 rounded-r-lg">
          <p className="text-[#1c2939]/80 dark:text-[#faf5ef]/70 italic text-base leading-relaxed">
            {parseInline(line.slice(2))}
          </p>
        </blockquote>
      );
      i++;
      continue;
    }

    // Code block
    if (line.startsWith('```')) {
      const codeLines: string[] = [];
      i++;
      while (i < lines.length && !lines[i].startsWith('```')) {
        codeLines.push(lines[i]);
        i++;
      }
      elements.push(
        <pre key={i} className="bg-[#1c2939] dark:bg-[#0f1924] text-[#faf5ef] rounded-xl p-4 my-4 overflow-x-auto text-sm font-mono leading-relaxed">
          {codeLines.join('\n')}
        </pre>
      );
      i++;
      continue;
    }

    // Table
    if (line.startsWith('|')) {
      const tableLines: string[] = [];
      while (i < lines.length && lines[i].startsWith('|')) {
        tableLines.push(lines[i]);
        i++;
      }
      const rows = tableLines.filter((l) => !l.match(/^\|[-| ]+\|$/));
      elements.push(
        <div key={i} className="overflow-x-auto my-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-[#db8a6c]/10 dark:bg-[#db8a6c]/15">
                {rows[0]
                  .split('|')
                  .filter((_, ci) => ci > 0 && ci < rows[0].split('|').length - 1)
                  .map((cell, ci) => (
                    <th key={ci} className="px-4 py-2.5 text-left font-bold text-[#1c2939] dark:text-[#faf5ef] border border-[#d9cfcd] dark:border-[#2d3f5a]">
                      {parseInline(cell.trim())}
                    </th>
                  ))}
              </tr>
            </thead>
            <tbody>
              {rows.slice(1).map((row, ri) => (
                <tr key={ri} className="even:bg-[#faf5ef] dark:even:bg-[#1c2939]/30">
                  {row
                    .split('|')
                    .filter((_, ci) => ci > 0 && ci < row.split('|').length - 1)
                    .map((cell, ci) => (
                      <td key={ci} className="px-4 py-2.5 text-[#1c2939]/80 dark:text-[#faf5ef]/70 border border-[#d9cfcd] dark:border-[#2d3f5a]">
                        {parseInline(cell.trim())}
                      </td>
                    ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
      continue;
    }

    // Unordered list
    if (line.match(/^[-*] /) || line.match(/^\d+\. /)) {
      const listItems: string[] = [];
      const isOrdered = line.match(/^\d+\. /);
      while (i < lines.length && (lines[i].match(/^[-*] /) || lines[i].match(/^\d+\. /))) {
        listItems.push(lines[i].replace(/^[-*] /, '').replace(/^\d+\. /, ''));
        i++;
      }
      if (isOrdered) {
        elements.push(
          <ol key={i} className="list-decimal list-inside space-y-1.5 my-4 text-[#1c2939]/85 dark:text-[#faf5ef]/75">
            {listItems.map((item, li) => (
              <li key={li} className="text-base leading-relaxed pl-1">
                {parseInline(item)}
              </li>
            ))}
          </ol>
        );
      } else {
        elements.push(
          <ul key={i} className="space-y-1.5 my-4 text-[#1c2939]/85 dark:text-[#faf5ef]/75">
            {listItems.map((item, li) => (
              <li key={li} className="flex items-start gap-2 text-base leading-relaxed">
                <span className="text-[#db8a6c] mt-1.5 flex-shrink-0">•</span>
                <span>{parseInline(item)}</span>
              </li>
            ))}
          </ul>
        );
      }
      continue;
    }

    // Regular paragraph
    elements.push(
      <p key={i} className="text-base text-[#1c2939]/85 dark:text-[#faf5ef]/75 leading-relaxed my-4">
        {parseInline(line)}
      </p>
    );
    i++;
  }

  return <div className="prose-custom">{elements}</div>;
};

export default ArticleRenderer;

import { useState } from 'react';

interface Props {
  children: string;
  maxChars?: number;
}

function ExpandableText({ children, maxChars = 100 }: Props) {
  const [isExpanded, setExpanded] = useState(true);

  if (children.length <= maxChars) return <p>{children}</p>;
  const text = isExpanded ? children : children.substring(0, maxChars);
  return (
    <p>
      {text}...{' '}
      <button onClick={() => setExpanded(!isExpanded)}>
        {isExpanded ? 'less' : 'more'}
      </button>
    </p>
  );
}

export default ExpandableText;

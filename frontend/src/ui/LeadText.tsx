import React from 'react';
interface LeadTextProps {
  text1: string;
  text2: string;
  text3: string;
}
const LeadText: React.FC<LeadTextProps> = ({ text1, text2, text3 }) => {
  return (
    <div>
      <div className="flex flex-col items-center justify-center my-10">
        <h1 className="text-2xl font-extrabold">
          {text1} <span className="text-red-700">{text2}</span>
        </h1>
        <p>{text3}</p>
      </div>
    </div>
  );
};

export default LeadText;

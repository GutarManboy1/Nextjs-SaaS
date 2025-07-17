import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { subjects } from "@/constants";

const SubjectFilter = () => {
  return (
    <div>
      <Select name="subject" defaultValue="all">
        <SelectTrigger className="input capitalize">
          <SelectValue placeholder="Subject" />
        </SelectTrigger>
        <SelectContent>
          {subjects.map((subject) => (
            <SelectItem key={subject} value={subject} className="capitalize">
              {subject}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};

export default SubjectFilter;

import { useEffect } from "react";
import { useRecordContext } from "react-admin";

const FieldUI = ({ source }) => {
  const record = useRecordContext();

  const nestedSource = () => {
    const hasNestedField = source.includes(".");

    if (!hasNestedField) return record[source];
    const fields = source.split(".");

    const nestedValueFromObj = fields.reduce((acc, item) => {
      return acc[item];
    }, record);

    return nestedValueFromObj;
  };

  return record ? <p>{nestedSource()}</p> : null;
};

export default FieldUI;

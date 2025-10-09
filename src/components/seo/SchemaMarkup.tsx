import { Helmet } from "react-helmet-async";

interface SchemaMarkupProps {
  schema: object | object[];
}

export const SchemaMarkup = ({ schema }: SchemaMarkupProps) => {
  const schemaArray = Array.isArray(schema) ? schema : [schema];
  
  return (
    <Helmet>
      {schemaArray.map((schemaObj, index) => (
        <script key={index} type="application/ld+json">
          {JSON.stringify(schemaObj)}
        </script>
      ))}
    </Helmet>
  );
};

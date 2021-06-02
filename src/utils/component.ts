export const generateComponentTemplate = (componentName: string): string => {
  return `import React from 'react'

  import styles from "${componentName}.module.css";
  
  function ${componentName}() {
    return (
      <div>
        
      </div>
    )
  }
  
  export default Component
  `;
};

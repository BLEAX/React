import { useInsertionEffect } from "react";
// 컴포넌트
function MyButton() {
  function useCSS(rule) {
    useInsertionEffect(() => {
      // ... <style> 태그를 여기에서 주입하세요 ...
    });
    return rule;
  }
  const className = useCSS("...");
  return <div className={className} />;
}

export default MyButton;

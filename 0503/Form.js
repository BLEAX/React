function Form() {
    const ref = useRef(null);
  
    function handleClick() {
      ref.current.focus();
    }
  
    return (
      <form>
        <MyInput label="Enteryour name:" ref={ref} />
        <button type="button" onClick={handleClick}>
          Edit
        </button>
      </form>
    );
  }
  
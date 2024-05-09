import { forwardRef } from "react";

const MyInput = forwardRef(function MyInput(props, ref) {
  const { label, ...otherProps } = props;
  return (
    <label>
      {label}
      <input {...otherProps} ref={ref} />
    </label>
  );
});

function Form() {
  const ref = useRef(null);

  function handleClick() {
    ref.current.focus();
  }

  return (
    <form>
      <MyInput label='Enter your name:' ref={ref} />
      <button type='button' onClick={handleClick}>
        Edit
      </button>
    </form>
  );
}

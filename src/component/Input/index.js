
export const Input = ({ onChange, onFocus, placeholder, type }) => {
  return (
    <>
      <input
        className="border-normal-text focus:outline-none border border-solid
                    box-border w-full rounded-lg
                    text-normal-text text-sm p-2
                    dark:border-off-white dark:bg-background-dark-mode dark:text-off-white"
        onChange={onChange}
        onFocus={onFocus}
        placeholder="Search blog posts (this is a work in progress - pls report any bugs!)"
        type="text"
      />
    </>
  );
};

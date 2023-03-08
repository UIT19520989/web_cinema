import styles from "./InputSearch.module.scss";

const InputSearch = () => {
  return (
    <form className={styles.form}>
      <input
        className={styles.input}
        dir='auto'
        id='inner_search_v4'
        name='query'
        type='text'
        tabindex='1'
        autocorrect='off'
        autofill='off'
        autocomplete='off'
        spellcheck='false'
        placeholder='Search for a movie, tv show, person......'
        value=''
      ></input>
      <input type='submit' value='Search' className={styles.submit}></input>
    </form>
  );
};

export default InputSearch;

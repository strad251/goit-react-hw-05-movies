import css from './Loader.module.css'

export const Loader = () => {
  return (
    <div className={css.Overlay}>
    <div className={css.ldsroller}><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
  </div>
  )
}
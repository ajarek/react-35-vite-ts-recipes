import './Label.css'
type Props = {
  title:string
  
}
const Label = ({title}:Props) => {
  return (
    <div className={'label'}>
      <label htmlFor=''>
        {title}
      </label>
    </div>
  )
}

export default Label

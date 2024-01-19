import { Oval } from 'react-loader-spinner';

const Spinner = () => {
  return (
    <Oval
      height={100}
      width={100}
      color="red"
      wrapperStyle={{}}
      wrapperClass=""
      visible={true}
      ariaLabel='oval-loading'
      secondaryColor="#gray"
      strokeWidth={2}
      strokeWidthSecondary={2}
    />
  )
}

export default Spinner;
const Button = ({ iconUrl, label }) => {
  return (
    <button className="ml-2 rounded-full bg-coral-red py-2 flex px-4 items-center gap-2 text-white border-2 border-coral-red">
        {label}
        <img src={iconUrl} alt="now" width={25} height={25} />
    </button>
  )
}

export default Button

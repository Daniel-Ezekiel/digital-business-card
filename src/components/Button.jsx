function Button({ className, icon, label, url }) {
  return (
    <a className={className} href={url}>
      {icon}
      {label}
    </a>
  );
}

export default Button;

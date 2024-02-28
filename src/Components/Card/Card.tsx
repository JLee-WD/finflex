import "./Card.css"

interface Props {
  companyName: string;
  ticker: string;
  price: number;
}

const Card: React.FC<Props> = ({ companyName, ticker, price }: Props) : JSX.Element => {
  return (
    <div className='card'><img src='https://images.unsplash.com/photo-1682686578456-69ae00b0ecbd?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='test' />
      <div className='details'>
        <h2>{companyName} ({ticker})</h2>
        <p>${price}</p>
      </div>
      <p className='info'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, mollitia?</p>
    </div>
  )
}

export default Card
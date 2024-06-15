import React from 'react'
import CustomerImg1 from '../../assets/images/customer-img-1.png';
import CustomerImg2 from '../../assets/images/customer-img-2.png';
import CustomerImg3 from '../../assets/images/customer-img-3.png';
import CustomerImg4 from '../../assets/images/customer-img-4.png';
const Customers = () => {
  return (
    <section className='customers-section-container section-padding'>
        <div className="customers-data">
            <ul>
                <li>
                    <img src={CustomerImg1} alt="img" />
                    <div className='customer-info'>
                        <div>15663+</div>
                        <p>Our Total Products</p>
                    </div>
                </li>
                <li>
                    <img src={CustomerImg2} alt="img" />
                    <div className='customer-info'>
                        <div>356+</div>
                        <p>Team Members</p>
                    </div>
                </li>
                <li>
                    <img src={CustomerImg3} alt="img" />
                    <div className='customer-info'>
                        <div>2365+</div>
                        <p>Satisfied Customers</p>
                    </div>
                </li>
                <li>
                    <img src={CustomerImg4} alt="img" />
                    <div className='customer-info'>
                        <div>156+</div>
                        <p>Satisfied Customers</p>
                    </div>
                </li>
            </ul>
        </div>
    </section>
  )
}

export default Customers;

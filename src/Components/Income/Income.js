import React, { useEffect } from 'react';
import styled from 'styled-components';
import { InnerLayout } from '../../styles/Layouts';
import { useGlobalContext } from '../../context/globalContext';
import Form from '../Form/Form';
import IncomeItem from '../IncomeItem/IncomeItem';

function Income() {
    const {addIncome, incomes, getIncomes, deleteIncome, totalIncome} = useGlobalContext()

    useEffect(() =>{
        getIncomes() 
    }, [])

    return(
        <IncomeStyled>
            <InnerLayout>
                <h1>Incomes</h1>
                <h2 className='total-income'>Total Income:
                    <span> ${totalIncome()}</span></h2>
                <div className='income-content'>
                    <div className='form-container'>
                        <Form />
                    </div>
                    <div className='incomes'>
                        {incomes.map((income) => {
                            const {_id, title, amount, date, category, description, type}=income;
                            return <IncomeItem 
                                key={_id}
                                id={_id}
                                title={title}
                                description={description}
                                amount={amount} 
                                date={date}
                                type={type}
                                category={category}
                                indicatorColor="var(--color-green)"
                                deleteItem={deleteIncome}
                            />

                        })}
                    </div>
                </div>

            </InnerLayout>
        </IncomeStyled>
    )
}

const IncomeStyled = styled.div`
    display: flex;
    overflow: auto;
    .total-income{
        display: flex;
        justify-content: center;
        align-items: center;
        background: #FCF6F9;
        border: 2px solid #FFFFFF;
        box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
        border-radius: 20px;
        padding: 1rem;
        margin: 1rem 0;
        font-size: 2rem;
        gap: .5rem;
        span{
            color: var(--color-green);
            font-size: 2.5rem;
            font-weight: 800;
        }
    }
    .income-content{
        display: flex;
        gap: 2rem; 
        .incomes{
            flex: 1;}
    }
    
    @media (max-width: 1350px) {
        .income-content{
            display: grid;
            grid-template-columns: 1fr 2fr;
            gap: 0.1rem;
            .incomes{
                display: grid;
                grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
                gap: 1rem;
            }
        }
    }

    @media (max-width: 740px){
        .income-content {
            grid-template-columns: 1fr;
            .form-container{
                margin-left: 0.5rem;
                width: 100%;
            }
            .incomes {
                margin-top: 1.5rem;
                margin-left: 0;
            }
        }
    }
`;

export default Income;
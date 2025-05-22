import React, { useEffect } from 'react';
import styled from 'styled-components';
import { InnerLayout } from '../../styles/Layouts';
import { useGlobalContext } from '../../context/globalContext';
import Form from '../Form/Form';
import IncomeItem from '../IncomeItem/IncomeItem';
import ExpenseForm from './ExpenseForm';

function Expenses() {
    const {addIncome, expenses, getExpenses, deleteExpense, totalExpenses} = useGlobalContext()

    useEffect(() =>{
        getExpenses() 
    }, [])

    return(
        <ExpenseStyled>
            <InnerLayout>
                <h1>Expenses</h1>
                <h2 className='total-expense'>Total Expense:
                    <span> ${totalExpenses()}</span></h2>
                <div className='expense-content'>
                    <div className='form-container'>
                        <ExpenseForm />
                    </div>
                    <div className='expenses'>
                        {expenses.map((income) => {
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
                                deleteItem={deleteExpense}
                            />

                        })}
                    </div>
                </div>

            </InnerLayout>
        </ExpenseStyled>
    )
}

const ExpenseStyled = styled.div`
    display: flex;
    overflow: auto;
    .total-expense{
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
    .expense-content{
        display: flex;
        gap: 2rem; 
        .expenses{
            flex: 1;}
    }

    @media (max-width: 1350px) {
        .expense-content{
            display: grid;
            grid-template-columns: 1fr 2fr;
            gap: 0.1rem;
            .expenses{
                display: grid;
                grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
                gap: 1rem;
            }
        }
    }

    @media (max-width: 740px){
        .expense-content {
            grid-template-columns: 1fr;
            .form-container{
                margin-left: 0.5rem;
                width: 100%;
            }
            .expenses {
                margin-top: 1.5rem;
                margin-left: 0;
            }
        }
    }

`;

export default Expenses;
import React, { useEffect } from 'react';
import styled from 'styled-components';
import { InnerLayout } from '../../styles/Layouts';
import { dollar } from '../../utils/Icons';
import Chart from '../Chart/Chart';
import { useGlobalContext } from '../../context/globalContext';
import History from '../History/History';

function Dashboard() {
    const {totalExpenses, totalIncome, totalBalance, getIncomes, getExpenses
        , incomes, expenses
    } = useGlobalContext()

    useEffect(() => {
       getIncomes() 
       getExpenses()
    }, [])

    return(
        <DashboardStyled>
            <InnerLayout>
                <h1>All Transactions</h1>
                <div className="stats-con">
                    <div className="chart-con">
                        <Chart />
                        <div className='amount-con'>
                            <div className='income'>
                                <h2>Total Income</h2>
                                <p>
                                    {dollar} {totalIncome()}
                                </p>
                            </div>
                            <div className='expense'>
                                <h2>Total Expense</h2>
                                <p>
                                    {dollar} {totalExpenses()}
                                </p>
                            </div>
                            <div className='balance'>
                                <h2>Total Balance</h2>
                                <p style={{ color: totalBalance() >= 0 ? 'green' : 'red' }}>
                                    {dollar} {totalBalance()}
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='history-con'>
                        <History />
                        <h2 className='salary-title'>Min <span>Salary</span><span>Max</span></h2>
                        <div className='salary-item'>
                            <p>
                                {Math.min(...incomes.map(item => item.amount))}
                            </p>
                            <p>
                                {Math.max(...incomes.map(item => item.amount))}
                            </p>
                        </div>
                        <h2 className='salary-title'>Min <span>Expense</span><span>Max</span></h2>
                        <div className='salary-item'>
                            <p>
                                {Math.min(...expenses.map(item => item.amount))}
                            </p>
                            <p>
                                {Math.max(...expenses.map(item => item.amount))}
                            </p>
                        </div>
                    </div>
                </div>
            </InnerLayout>
        </DashboardStyled>
    )
}

const DashboardStyled = styled.div`
    .stats-con{
        display: grid;
        grid-template-columns: repeat(5, 1fr);
        gap: 2rem;
        .chart-con{
            grid-column: 1 / 4;
            height: 400px;
            .amount-con{
                display: grid;
                grid-template-columns: repeat(4, 1fr);
                gap: 2rem;
                margin-top: 2rem;
                .income, .expense{
                    grid-column: span 2;
                }

                .income, .expense, .balance{
                    background: #FCF6F9;
                    border: 2px solid #FFFFFF;
                    box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
                    border-radius: 20px;
                    padding: 1rem;
                    p{
                        font-size: 3.5rem;
                        font-weight: 700;
                    }
                }

                .balance{
                    grid-column: 2 / 4;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    p{
                        color: var(--color-green);
                        opacity: 0.6;
                        font-size: 4.5rem;
                    }
                }
            }
        }

        .history-con{
            grid-column: 4 / -1;
            h2{
                margin: 1rem 0;
                display: flex;
                align-items: center;
                justify-content: space-between;
            }
            .salary-title{
                font-size: 1.2rem;
                span{
                    font-size: 1.8rem;
                }
            }
            .salary-item{
                background: #FCF6F9;
                border: 2px solid #FFFFFF;
                box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
                padding: 1rem;
                border-radius: 20px;
                display: flex;
                justify-content: space-between;
                align-items: center;
                p{
                    font-weight: 600;
                    font-size: 1.6rem;
                }
            }
        }
    }

    @media (max-width: 768px) {
        .stats-con{
            grid-template-columns: repeat(3, 1fr); 
            flex-direction: column;
            .chart-con {
                height: auto;
                .amount-con {
                    grid-template-columns: repeat(2, 1fr);
                
                    .income, .expense {
                        grid-column: 1/4;
                        display: flex;
                        flex-direction: column;
                        justify-content: center;
                        align-items: center;
                    }

                    .income, .expense, .balance {
                        font-weight: 200;
                        font-size: .75rem;
                        p{
                            font-size: 2.1rem;
                        }
                    }

                    .balance{
                        grid-column: 1 / -1;
                    }
                }
            }
            .history-con{
                margin-top: 10rem;
                grid-column: 1 / -1;
            }
                
        }
    }

    @media (max-width: 1000px) {
        .stats-con{
            grid-template-columns: repeat(3, 1fr); 
            .chart-con{
                .amount-con{
                    height: auto;
                    display: flex;
                    .income, .expense{
                        grid-column: 3/6;
                        display: flex;
                        flex-direction: column;
                        justify-content: center;
                        align-items: center;
                    }
                    
                    /* only text modify*/
                    .income, .expense, .balance{
                        align-items: center;
                        font: center;
                        font-size: 1.2 rem;
                        font-weight: 200;
                    }
                    .income p, .expense p, .balance p{
                        font-size: 1.3rem;
                    }

                    .balance{
                        grid-column: 2 / 4;
                    }
                }
            }

        }
    }

    @media (max-width: 1350px) {
        .stats-con{
            grid-template-columns: repeat(4, 1fr); 
            .chart-con{
                .amount-con{
                    .income, .expense{
                        grid-column: 0 /-5;
                    }   
                    /* only text modify*/
                    .income, .expense, .balance{
                        font-size: 1.5 rem;
                    }
                    .income p, .expense p, .balance p{
                        font-size: 1.8rem;
                    }

                    .balance{
                        grid-column: 1 / -1;
                    }
                }
            }

            .history-con{
                .salary-title{
                    gap: 1rem;
                    font-size: 1.4rem;
                }
                .salary-title span{
                    font-size: 1.4rem;
                }
            }
        }
    }
    
    @media (max-width: 1450px){
        .stats-cons{
            .chart-con{
                .balance{
                    gap-bottom: 1rem;
                }
            }
        }
    }

`;

export default Dashboard;
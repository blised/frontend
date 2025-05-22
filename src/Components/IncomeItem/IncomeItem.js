import React from 'react';
import styled from 'styled-components';
import { bitcoin, book, calender, card, circle, clothing, comment, dollar, 
    freelance, food, medical, money, piggy, stocks, 
    takeaway, trash, tv, users, yt } from '../../utils/Icons';
import Button from '../Button/Button';
import { dateFormat } from '../../utils/dateFormat';

function IncomeItem({
    id,
    title,
    amount,
    date, 
    category,
    description,
    deleteItem,
    indicatorColor,
    type

}){


    const caterogyIcon = () => {
        switch (category) {
            case 'salary':
                return money
            case 'freelancing':
                return freelance
            case 'investments':
                return stocks
            case 'stocks':
                return users
            case 'bitcoin':
                return bitcoin
            case 'bank':
                return card
            case 'youtube':
                return yt
            case 'other':
                return piggy 
            default:
                return ''
        }
    }

    const expenseCatIcon = () => {
        switch (category) {
            case 'education':
                return book;
            case 'groceries':
                return food;
            case 'health':
                return medical
            case 'subscriptions':
                return tv;
            case 'takeaways':
                return takeaway;
            case 'clothing':
                return clothing
            case 'travelling':
                return freelance;
            case 'other':
                return circle;
        
            default:
                return '';
        }
    }


    return(
        <IncomeItemStyled indicator={indicatorColor}>
            <div className='icon'>
                {type === 'expense' ? expenseCatIcon() : caterogyIcon()}

            </div>
            <div className='content'>
                <h5>{title}</h5>
                <div className='inner-content'>
                    <div className='text'>
                        <p>{dollar} {amount}</p>
                        <p>{calender} {dateFormat(date)}</p>
                        <p>
                            <span className='comment-icon' data-comment={description}>{comment}</span>
                        </p>
                    </div>
                    <div className='btn-con'>
                        <Button 
                            icon={trash}
                            bPad={'1rem'}
                            bRad={'50%'}
                            bg={'var(--primary-color)'}
                            color={'#fff'}
                            iColor={'#fff'}
                            hColor={'var(--color-green)'}
                            onClick={() => {
                            const confirmDelete = window.confirm('¿Estás seguro de que quieres eliminar este elemento?');
                            if (confirmDelete) {
                                deleteItem(id);
                            }
                            }}
                        />
                    </div>
                </div>
            </div>
        </IncomeItemStyled>
    )
}

const IncomeItemStyled = styled.div`
    background: #FCF6F9;
    border: 2px solid #FFFFFF;
    box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
    border-radius: 20px;
    padding: 1rem;
    margin-bottom: 1rem;
    display: flex;
    align-items: center;
    gap: 1rem;
    width: 100%;
    /* color: #222260; */
    color: Brown;
    .icon{
        width: 80px;
        height: 80px;
        border-radius: 20px;
        background: #F5F5F5;
        display: flex;
        align-items: center;
        justify-content: center;
        border: 2px solid #FFFFFF;
        i{
            font-size: 2.6rem;
        }
    }

    .content{
        flex: 1;
        display: flex;
        flex-direction: column;
        gap: .2rem;
        h5{
            font-size: 1.3rem;
            padding-left: 2rem;
            position: relative;
            &::before{
                content: '';
                position: absolute;
                left: 0;
                top: 50%;
                transform: translateY(-50%);
                width: .8rem;
                height: .8rem;
                border-radius: 50%;
                background: ${props => props.indicator};
            }
        }
        .inner-content{
            display: flex;
            justify-content: space-between;
            align-items: center;
            .text{
                display: flex;
                align-items: center;
                gap: 1.5rem;
                /*font-size: 10.2rem; day, $ and coment*/
                p{
                    display: flex;
                    align-items: center;
                    gap: .5rem;
                    color: var(--primary-color);
                    opacity: 0.8;

                    .comment-icon{
                        &::after{
                            content: attr(data-comment);
                            display: content;
                        }
                    }
                    
                }
            }
        }
    }
    
    @media (max-width: 740px) {
    
    }
    
    @media (max-width: 990px){
        .content{
            .inner-content{
                .text{
                    .p{
                        span{
                            display: hover;     
                        }
                    }
                }
            }
        }
    }

    @media (max-width: 1480px){
        .content{
            .inner-content{
                .text{
                    gap: 0.5rem;
                    font-size: 0.9rem;
                    p{
                        display: flex;
                        aling-items: center;
                        gap: .1rem;
                        .comment-icon{
                            position: relative;
                            cursor: help;
                            &::after{
                                content: attr(data-comment);
                                position: absolute;
                                bottom: 100%; left: 50%;
                                transform: translateX(-50%) translateY(-8px);
                                background: rgba(34,34,96,0.9);
                                color: white;
                                padding: 0.3rem 0.5rem;
                                border-radius: 4px;
                                white-space: nowrap;
                                opacity: 0;
                                pointer-events: none;
                                transition: opacity 0.2s;
                            }
                            
                            &:hover::after{
                                opacity: 1;
                            }

                        }
                    }
                }
            }
        }
    }
`;

export default IncomeItem;
import React from "react";
import styled from "styled-components";
import { useGlobalContext } from "../../context/globalContext";
import { useWindowSize } from "../../utils/useWindowSize";

function History() {
    const {transactionHistory} = useGlobalContext()
    const {width} = useWindowSize()

    // Decidimos cuántos items mostrar según el ancho
    const maxItems = width < 900 ? 3 : 4;
    const [...history] = transactionHistory().slice(0, maxItems);

    // const [...history] = transactionHistory()
    return(
        <HistoryStyled>
            <h2>Recent History</h2>
            {history.map((item) => {
                const {__id, title, amount, type} = item
                return( 
                    <div hey={__id} className="history-item">
                        <p style={{
                            color: type === 'expense' ? 'red' : 'var(--color-green)'
                        }}>
                            {title}
                        </p>
                        <p style={{
                            color: type === 'expense' ? 'red' : 'var(--color-green)'
                        }}>
                            {type === 'expense' ? `-${amount}` : `+${amount}`}
                        </p>
                    </div>
                )
            })}
        </HistoryStyled>
    )
}

const HistoryStyled = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    .history-item{
        background: #FCF6F9;
        border: 2px solid #FFFFFF;
        box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
        padding: 1rem;
        border-radius: 20px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
`;

export default History;
import React from "react";
import styled from "styled-components";
import { useGlobalContext } from "../../context/globalContext";

function History() {
    const {transactionHistory} = useGlobalContext()

    const [...history] = transactionHistory()
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
`;

export default History;
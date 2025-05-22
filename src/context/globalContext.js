import React, {useState, useContext} from "react"
import axios from 'axios'

const BASE_URL = "http://localhost:5000/api/v1/";

const GlobalContext = React.createContext()

export const GlobalProvider = ({children}) => {

    const [incomes, setIncomes] = useState([])
    const [expenses, setExpenses] = useState([])
    const [error, setError] = useState(null)
    const [incomeToEdit, setIncomeToEdit] = useState(null)
    const [expenseToEdit, setExpenseToEdit] = useState(null)

    // calculate incomes
    const addIncome = async (income) => {
        const response = await axios.post(`${BASE_URL}add-income`, income)
            .catch((err) => {
                setError(err.response.data.message)
            })
        // It need to render after adding an income
        getIncomes()
    }

    const selectIncomeToEdit = (income) => {
        setIncomeToEdit(income)
        setError(null)
    }

    const clearEdit = () => {
        setIncomeToEdit(null)
        setExpenseToEdit(null)
        setError(null)
    }

    const updateIncome = async incomeData => {
        // call income by id
        const { id, ...body} = incomeData;
        await axios.patch(`${BASE_URL}update-income/${id}`, body)
        // render after updating data
        getIncomes()
        // reset the edit state
        clearEdit()
    }

    const getIncomes = async () => {
        const response = await axios.get(`${BASE_URL}get-incomes`)
        setIncomes(response.data)
        console.log(response.data)
    }

    const deleteIncome = async (id) => {
        const res = await axios.delete(`${BASE_URL}delete-income/${id}`)
        // and render after deleting an income
        getIncomes()
    }

    const totalIncome = () => {
        let totalIncome = 0;
        incomes.forEach((income) => {
            totalIncome = totalIncome + income.amount
        })
        return totalIncome;
    }

    //calculete expenses
    const addExpense = async (income) => {
        const response = await axios.post(`${BASE_URL}add-expense`, income)
            .catch((err) =>{
                setError(err.response.data.message)
            })
        getExpenses()
    }

    const getExpenses = async () => {
        const response = await axios.get(`${BASE_URL}get-expenses`)
        setExpenses(response.data)
        console.log(response.data)
    }

    const selectExpenseToEdit = (income) => {
        setExpenseToEdit(income)
        setError(null)
    }

    const updateExpense = async expenseData => {
        // call income by id
        const { id, ...body} = expenseData;
        await axios.patch(`${BASE_URL}update-expense/${id}`, body)
        // render after updating data
        getExpenses()
        // reset the edit state
        clearEdit()
    }

    const deleteExpense = async (id) => {
        const res  = await axios.delete(`${BASE_URL}delete-expense/${id}`)
        getExpenses()
    }

    const totalExpenses = () => {
        let totalIncome = 0;
        expenses.forEach((income) =>{
            totalIncome = totalIncome + income.amount
        })

        return totalIncome;
    }

    // balance
    const totalBalance = () => {
        return totalIncome() - totalExpenses()
    }

    const transactionHistory = () => {
        const history = [...incomes, ...expenses]
        history.sort((a,b) => {
            return new Date(b.createdAt) - new Date(a.createdAt)
        })

        return history.slice(0, 5)
    }

    // console.log(totalIncome())

    return(
        <GlobalContext.Provider value={{
            addIncome,
            getIncomes,
            updateIncome,
            incomeToEdit,
            selectIncomeToEdit,
            clearEdit,
            incomes,
            deleteIncome,
            totalIncome,
            expenses,
            addExpense,
            updateExpense,
            expenseToEdit,
            selectExpenseToEdit,
            getExpenses,
            deleteExpense,
            totalExpenses,
            totalBalance, 
            transactionHistory,
            error,
            setError
        }}>
            {children}
        </GlobalContext.Provider>
    )
}

export const useGlobalContext = () => {
    return useContext(GlobalContext)
}
import React, { useState } from 'react';
import './styles.css';
import '../../global.css'
import logoImg from '../../assets/logo.svg'
import {FiArrowLeft} from 'react-icons/fi';
import { Link } from 'react-router-dom';
import api from '../../services/api';

function NewIncident() {

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [value, setValue] = useState('');
    const ongId = localStorage.getItem('ongId');
    
    async function handleNewIncident(e){
        e.preventDefault();

        const data = {
            title,
            description,
            value,
        }

        try{
            const id = await api.post('incidents',data,{
                headers : {
                    Authorization : ongId,
                }, 
            });

            console.log(`Caso com ID ${id.id} cadastrado com sucesso`);
        }catch(err){
            alert('Erro ao cadastrar um novo caso, tente novamente');
        }
    }

    return (
        <div className="new-incident-container">
            <div className="content">
                <section>
                    <img src={logoImg} alt="logo aplicativo"/>
                    <h1>Cadastrar novo Caso</h1>
                    <p>Descreva o caso detalhadamente para encontrar um heroi para resolver isso</p>
                    <Link className="back-link" to="/profile">
                        <FiArrowLeft size={16} color="#E02041"/>
                        Voltar para Home
                    </Link>
                </section>
                
                <form onSubmit={handleNewIncident}>
                    <input 
                        type="text" 
                        placeholder="Titulo do caso"
                        value={title}
                        onChange={e => setTitle(e.target.value)}></input>
                    <textarea 
                        type="text" 
                        placeholder="Descricao"
                        value={description}
                        onChange={e => setDescription(e.target.value)}></textarea>
                    <input 
                        placeholder="Valor em reais"
                        value={value}
                        onChange={e => setValue(e.target.value)}></input>
                    <button className="button" type="submit">Cadastrar</button>
                </form>
            </div>
        </div>
    );
}

export default NewIncident;
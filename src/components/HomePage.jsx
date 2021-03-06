import React, {Component} from "react";
import {Link} from "react-router-dom";

import FlatButton from "material-ui/FlatButton";

import homePageImg from "../img/g.jpg";

class HomePage extends Component {
    constructor(props){
        super(props)
    }
    render(){
        return (
            <div style={{minWidth: '100%', minHeight: '91.6vh', background: `url(${homePageImg}) no-repeat 50% 50%`}}>
                <div className="homePage">
                    <div className="actionHomeBlock" style={{display:'flex', margin:'0 auto',width: '80%'}}>
                        <h2 style={{color: 'white'}}>Знайди або стань частиною команди</h2>
                        <p>Даний проект призначений для зручного пошуку і підбору команд або фахівців для спільної розробки програмного продукту. Якщо у тебе є ідея, варта уваги, але немає команди для її реалізації, або ж твоїй команді потрібні додаткові ресурси у вигляді фахівців, то даний проект допоможе тобі знайти і зібрати команду для розвитку твоєї ідеї.</p>
                        <Link to="/projects/create">
                            <FlatButton
                                label="Створити новий проект"
                                labelStyle={{color:'#bdc3c7'}}
                            />
                        </Link>
                        <Link to="/projects">
                            <FlatButton
                                label="Пошук проекту"
                                labelStyle={{color:'#bdc3c7'}}
                            />
                        </Link>
                    </div>
                    <div className="countTeamBlock" style={{display:'flex', margin:'5% auto',width: '80%'}}>
                        <div className="countItem">
                            <h2>∞ Користувачiв</h2>
                        </div>
                        <div className="countItem">
                            <h2>∞ Проектів</h2>
                        </div>
                        <div className="countItem">
                            <h2>∞ Iдей</h2>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}

export default HomePage;
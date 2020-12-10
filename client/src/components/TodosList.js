import React, { Component } from 'react';
import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import {v4 as uuid} from 'uuid';

class TodosList extends Component {
    state = {
        items: [
            { id: uuid(), name: 'Test' },
            { id: uuid(), name: 'Test 1' },
            { id: uuid(), name: 'Test 2' },
            { id: uuid(), name: 'Test 3' },
        ]
    }

    render() {
        const { items } = this.state;
        return(
            <Container>
                <Button 
                color="dark"
                style={{marginBottom: '2em'}}
                onClick={() => {
                    const name = prompt('Enter Item');
                    if(name) {
                        this.setState(state => ({
                            items: [...state.items, { id: uuid(), name }]
                        }));
                    }
                }}>Add Item</Button>

                <ListGroup>
                    <TransitionGroup className="todos-list">
                        {items.map(({ id, name }) => (
                            <CSSTransition key={id} timeout={500} classNames="fade">
                                <ListGroupItem>
                                    <Button
                                    className="remove-btn"
                                    color="danger"
                                    size="sm"
                                    onClick={() => {
                                        this.setState(state => ({
                                            items: state.items.filter(item => item.id !== id)
                                        }));
                                    }}>&times;</Button>
                                    {name}
                                </ListGroupItem>
                            </CSSTransition>
                        ))}
                    </TransitionGroup>
                </ListGroup>
            </Container>
        );
    }
}

export default TodosList;
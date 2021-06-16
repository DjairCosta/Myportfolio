import React, { useState } from 'react'

import { Table, Button, Image, Container } from 'react-bootstrap'
import styled from 'styled-components'
import moment from 'moment'

import { useApi } from '../../hooks/useApi'
import Dialog from './Dialog'
import PortfolioForm from './PortfolioForm'
import {deleteItem, editItem, addPortfolioItem} from '../../services/api'



const PortfolioList = () => {

    const handleDel = (slug) => {
        console.log("Delete with success!", slug)
        deleteItem(slug)
    }
    const handleAdd = (slug, data) =>{
        addPortfolioItem(data)
        console.log("Add with success!")
        //addItem(data)
    }
    const handleEdit = (slug, data) => {
        console.log("Edit with success!", slug)
        editItem(slug)
    }

    const[title, setTitle] = useState()
    const[description, setDescription] = useState()
    const[longDescription, setLongDescription] = useState()
    const[image, setImage] = useState()
    const[slug, setSlug] = useState()
    const[tech, setTech] = useState()
    const [action] = useState({
        del: {
            header: 'Confirm Delete?',
            btnVariant: 'danger',
            btnLabel: 'Confirm',
            showBody: true, 
            body: 'Are you sure you want to delete it?',
            callback: handleDel
            
        },
        edit: {
            header: 'Edit Portfolio',
            btnVariant: 'primary',
            btnLabel: 'Save',
            showBody: false,
            callback: handleEdit
            

        },
        add: {
            header: 'Add New Portfolio',
            btnVariant: 'primary',
            btnLabel: 'Save',
            showBody: false,
            callback: handleAdd
       
        }
    })
    const [currentAction, setCurrentAction] = useState({
        header: '',
        btnVariant: '',
        btnLabel: '',
        body: ''
    })
    const [show, setShow] = useState(false)
    const { data } = useApi('/portfolio')

    const handleShow = (portfolio, actn) => {
        setCurrentAction(actn)
        setShow(true)
        setTitle(portfolio?.title || '')
        setDescription(portfolio?.description || '')
        setLongDescription(portfolio?.longDescription || '')
        setImage(portfolio?.image || '')
        setTech(portfolio?.technologies || [])
        setSlug(portfolio?.slug || '')

    }

    const addPortfolioItem = (data) => {
        const newPortfolioItem = {
            title: data.title,
            description: data.description,
            longDescription: data.DialoglongDescription,
            image: data.image,
            technologies: data.tech
        }
        console.log("My new item of portfolio", newPortfolioItem)
    }

    const editPortfolioItem = (slug, data) => {
        
    }


    return (
        <Container>
            <Button variant="primary" size="lg" onClick={()=>handleShow(null, action.add) }>Add New</Button>
            <Table striped bordered hover variant="dark">
                <thead>
                    <tr>
                        <th>Images</th>
                        <th>Title</th>
                        <th>Date</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {data?.data?.map(item => {
                        return (
                            <tr key={item.slug}>
                                <td>
                                    <Logo src={item.image} thumbnail />
                                </td>
                                <td>{item.title}</td>
                                <td>{moment(item.createdAt).format("MMM-YYYY")}</td>
                                <td>
                                    <Button variant="info" onClick={() => handleShow(item, action.edit)}>Edit</Button>
                                    <Button variant="danger" onClick={() => handleShow(item, action.del)}>Delete</Button>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </Table>

           <Dialog show={show} setShow={setShow} currentAction={currentAction}slug={slug}>
               {currentAction.showBody && currentAction.body}
               {!currentAction.showBody && (
               <PortfolioForm 
                    title={title}
                    setTitle={setTitle}
                    description={description}
                    setDescription={setDescription}
                    longDescription={longDescription}
                    setLongDescription={setLongDescription}
                    image={image}
                    setImage={setImage}
                    tech={tech}
                    setTech={setTech}
                    slug={slug}              
               />)}
           </Dialog>
        </Container>
    )
}

const Logo = styled(Image)`
    height: 100px;
`;

export default PortfolioList

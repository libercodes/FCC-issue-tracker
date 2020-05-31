import { RequestHandler } from 'express'
import Issue, { IIssue } from '../model/Issue'


export const AddIssue: RequestHandler = async( req, res, next ) => {
    const { 
        title, 
        text, 
        created_by, 
        assigned_to, 
        status_text, 
        open,
        project
    } = req.body
    let created_on = new Date()
    try {
        const objIssue = new Issue({
            title: title,
            text: text,
            created_by: created_by,
            assigned_to: assigned_to,
            status_text: status_text,
            open: open,
            project: project,
            created_on: created_on,
            updated_on: created_on
        })
        const savedIssue = await objIssue.save()
        res.json(savedIssue)
    } catch (error) {
        
    }
}

export const UpdateIssue: RequestHandler = async( req, res, next ) => {
    const { 
        title, 
        text, 
        created_by, 
        assigned_to, 
        status_text, 
        open,
        id
    } = req.body
    try {
        const foundIssue = await Issue.findById(id)
        if(foundIssue){
           foundIssue.title = title
           foundIssue.text = text
           foundIssue.created_by = created_by,
           foundIssue.assigned_to = assigned_to,
           foundIssue.open = open,
           foundIssue.status_text = status_text,
           foundIssue.updated_on = new Date()

           await foundIssue.save()

           res.json('successfully updated')
        }
    } catch (error) {
        res.json(`could not update ${id}`)
    }
    
}

export const DeleteIssue: RequestHandler = async( req, res, next ) => {
    const id = req.params.id
    if(id){
        return res.json('id error')
    }
    try {
        const deletedIssue = await Issue.findByIdAndDelete(id)
        if(deletedIssue){
            res.json(`deleted ${id}`)
        }
    } catch (error) {
        res.json(`could not delete ${id}`)
    }
}   

export const GetIssues: RequestHandler = async( req, res, next ) => {
    try {
        const projectname = req.params.projectname
        const query = { ...req.query, project: projectname }
        const issues: IIssue[] = await Issue.find(query)
        if(issues){
            res.json(issues)
        } else {
            res.json([])
        }
        
    } catch (error) {
        res.json(error)
    }
}

import mongoose, { Schema, Document } from 'mongoose'

export interface IIssue extends Document {
    _id: any,
    title: string,
    text: string,
    created_by: string,
    assigned_to?: string,
    status_text?: string,
    created_on: Date,
    updated_on: Date,
    open: boolean,
    project: string
}

const IssueSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    text: {
        type: String,
        required: true
    },
    created_by: {
        type: String,
        required: true
    },
    assigned_to: {
        type: String,
        default: ''
    },
    status_text: {
        type: String,
        default: ''
    },
    created_on: {
        type: Date,
        required: true
    },
    updated_on: {
        type: Date, 
        required: true
    },
    open: {
        type: Boolean,
        required: true
    },
    project: {
        type: String,
        required: true
    }    
}) 


export default mongoose.model<IIssue>('Issue',IssueSchema, 'issues')
import mongoose from "mongoose";

const JobApplicationsSchema = new mongoose.Schema({
    userId :{ type: String, ref:'User', required: true},
    companyId :{type: mongoose.Schema.Types.ObjectId,ref:'Company',required:true},
    JobId :{type: mongoose.Schema.Types.ObjectId,ref:'Job',required:true},
    status:{type:String, default:'Pending'},
    date:{type:Number, required: true}
})


const JobApplication = mongoose.model('JobApplication',JobApplicationsSchema)

export default JobApplication;
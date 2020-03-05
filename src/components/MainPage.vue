<template>
  <el-row>
    <el-row>
      <el-col :span="8"><div class="grid-content"></div></el-col>
      <el-col :span="8"><div class="grid-content"><img alt="Vue logo" src="../assets/logo.png"></div></el-col>
      <el-col :span="8"><div class="grid-content"></div></el-col>
    </el-row>
    <el-row>
      <el-col :span="4"><div class="grid-content"><span class="main-title">Venue Questionnaire</span></div></el-col>
      <el-col :span="20"><div class="grid-content"></div></el-col>
    </el-row>
    <el-row>
      <el-col :span="4"><div class="grid-content">Name of venue:</div></el-col>
      <el-col :span="20"><div class="grid-content">
        <el-input  placeholder="Please Input Name of venue."  v-model="venue_name"  clearable></el-input>
      </div></el-col>
    </el-row>
    <el-row>
      <el-col :span="16"><div class="grid-content">Inclusive of suites and designated hospitality areas, how many total seats are in the venue?</div></el-col>
      <el-col :span="8"><div class="grid-content">
        <el-input  placeholder="Please Input total seats are in the venue."  v-model="seat_cnt"  clearable></el-input>
      </div></el-col>
    </el-row>
    <el-row>
      <el-col :span="24"><div class="grid-content">How many different types of seats are in the venue? Please specify by number of seats and construction material.</div></el-col>
    </el-row>
    <el-row :gutter="5">
      <el-col :span="4"><div class="grid-content"></div></el-col>
      <el-col :span="4"><div class="grid-content bg-purple-dark cell">Type of seat</div></el-col>
      <el-col :span="3"><div class="grid-content bg-purple cell">Plastic</div></el-col>
      <el-col :span="3"><div class="grid-content bg-purple cell">Metal</div></el-col>
      <el-col :span="3"><div class="grid-content bg-purple cell">Wood</div></el-col>
      <el-col :span="3"><div class="grid-content bg-purple cell">Other</div></el-col>
      <el-col :span="4"><div class="grid-content"></div></el-col>
    </el-row>
    <el-row :gutter="5">
      <el-col :span="4"><div class="grid-content"></div></el-col>
      <el-col :span="4"><div class="grid-content bg-purple cell">Bleachers</div></el-col>
      <el-col :span="3"><div class="grid-content"><el-input  placeholder="Please Input the number"  v-model="val1_1"></el-input></div></el-col>
      <el-col :span="3"><div class="grid-content"><el-input  placeholder="Please Input the number"  v-model="val1_2"></el-input></div></el-col>
      <el-col :span="3"><div class="grid-content"><el-input  placeholder="Please Input the number"  v-model="val1_3"></el-input></div></el-col>
      <el-col :span="3"><div class="grid-content"><el-input  placeholder="Please Input the number"  v-model="val1_4"></el-input></div></el-col>
      <el-col :span="4"><div class="grid-content"></div></el-col>
    </el-row>
    <el-row :gutter="5">
      <el-col :span="4"><div class="grid-content"></div></el-col>
      <el-col :span="4"><div class="grid-content bg-purple cell">Stadium chairbacks</div></el-col>
      <el-col :span="3"><div class="grid-content"><el-input  placeholder="Please Input the number"  v-model="val2_1"></el-input></div></el-col>
      <el-col :span="3"><div class="grid-content"><el-input  placeholder="Please Input the number"  v-model="val2_2"></el-input></div></el-col>
      <el-col :span="3"><div class="grid-content"><el-input  placeholder="Please Input the number"  v-model="val2_3"></el-input></div></el-col>
      <el-col :span="3"><div class="grid-content"><el-input  placeholder="Please Input the number"  v-model="val2_4"></el-input></div></el-col>
      <el-col :span="4"><div class="grid-content"></div></el-col>
    </el-row>
    <el-row :gutter="5">
      <el-col :span="4"><div class="grid-content"></div></el-col>
      <el-col :span="4"><div class="grid-content bg-purple cell">Folding Chairs</div></el-col>
      <el-col :span="3"><div class="grid-content"><el-input  placeholder="Please Input the number"  v-model="val3_1"></el-input></div></el-col>
      <el-col :span="3"><div class="grid-content"><el-input  placeholder="Please Input the number"  v-model="val3_2"></el-input></div></el-col>
      <el-col :span="3"><div class="grid-content"><el-input  placeholder="Please Input the number"  v-model="val3_3"></el-input></div></el-col>
      <el-col :span="3"><div class="grid-content"><el-input  placeholder="Please Input the number"  v-model="val3_4"></el-input></div></el-col>
      <el-col :span="4"><div class="grid-content"></div></el-col>
    </el-row>
    <el-row :gutter="5">
      <el-col :span="4"><div class="grid-content"></div></el-col>
      <el-col :span="4"><div class="grid-content bg-purple cell">Other</div></el-col>
      <el-col :span="3"><div class="grid-content"><el-input  placeholder="Please Input the number"  v-model="val4_1"></el-input></div></el-col>
      <el-col :span="3"><div class="grid-content"><el-input  placeholder="Please Input the number"  v-model="val4_2"></el-input></div></el-col>
      <el-col :span="3"><div class="grid-content"><el-input  placeholder="Please Input the number"  v-model="val4_3"></el-input></div></el-col>
      <el-col :span="3"><div class="grid-content"><el-input  placeholder="Please Input the number"  v-model="val4_4"></el-input></div></el-col>
      <el-col :span="4"><div class="grid-content"></div></el-col>
    </el-row>
    <el-row>
      <el-col :span="8"><div class="grid-content">How many sections are in the venue?</div></el-col>
      <el-col :span="16"><div class="grid-content">
        <el-input  placeholder="Please Input the number of sections in the venue."  v-model="section_cnt"  clearable></el-input>
      </div></el-col>
    </el-row>
    <el-row>
      <el-col :span="8"><div class="grid-content">How many seats are in the student section?</div></el-col>
      <el-col :span="16"><div class="grid-content">
        <el-input  placeholder="Please Input the number of seats in the student section."  v-model="stu_seat_cnt"  clearable></el-input>
      </div></el-col>
    </el-row>
    <el-row>
      <el-col :span="6"><div class="grid-content">Does the venue have cup holders?</div></el-col>
      <el-col :span="6"><div class="grid-content">
        <el-radio v-model="is_holder" label="1">Yes</el-radio>
        <el-radio v-model="is_holder" label="2">No</el-radio>
      </div></el-col>
      <el-col :span="6"><div class="grid-content">If yes, how many?</div></el-col>
      <el-col :span="6"><div class="grid-content">
        <el-input  placeholder="Please Input the number of cup holders."  v-model="holder_cnt"  clearable></el-input>
      </div></el-col>
    </el-row>
    <el-row>
      <el-col :span="12"><div class="grid-content">Where are the cup holders? (on the arm rest, back of the chair, etc.)</div></el-col>
      <el-col :span="12"><div class="grid-content">
        <el-input  placeholder="Please Input where are the cup holders."  v-model="holder_pos"  clearable></el-input>
      </div></el-col>
    </el-row>
    <el-row>
      <el-col :span="8"><div class="grid-content">What is the width of the armrests?</div></el-col>
      <el-col :span="16"><div class="grid-content">
        <el-input  placeholder="Please Input the width of the armrests."  v-model="arm_width"  clearable></el-input>
      </div></el-col>
    </el-row>
    <el-row>
      <el-col :span="8"><div class="grid-content">Are the armrests padded, or plastic?</div></el-col>
      <el-col :span="16"><div class="grid-content">
        <el-input  placeholder="Please Input if the armrests are padded, or plastic."  v-model="arm_kind"  clearable></el-input>
      </div></el-col>
    </el-row>
    <el-row>
      <el-col :span="6"><div class="grid-content"></div></el-col>
      <el-col :span="7"><div class="grid-content">Does your venue have fan accessible WiFi?</div></el-col>
      <el-col :span="5"><div class="grid-content">
        <el-radio v-model="is_wifi" label="1">Yes</el-radio>
        <el-radio v-model="is_wifi" label="2">No</el-radio>
      </div></el-col>
      <el-col :span="6"><div class="grid-content"></div></el-col>
    </el-row>
    <el-row>
      <el-col :span="12"><div class="grid-content">During an event how would you rate your WiFi performance?</div></el-col>
      <el-col :span="12"><div class="grid-content">
        <el-radio v-model="performance" label="1">Very Poor</el-radio>
        <el-radio v-model="performance" label="2">Poor</el-radio>
        <el-radio v-model="performance" label="3">Average</el-radio>
        <el-radio v-model="performance" label="4">Great</el-radio>
        <el-radio v-model="performance" label="5">Excellent</el-radio>
      </div></el-col>
    </el-row>
    <el-row>
      <el-col :span="16"><div class="grid-content">Rate your cellular service in your venue during events, 1-10. (1 being no service – 10 being able to send pictures).</div></el-col>
      <el-col :span="8"><div class="grid-content">
        <el-input  placeholder="Please Input the rate your cellular service."  v-model="rate"  clearable></el-input>
      </div></el-col>
    </el-row>
    <el-row>
      <el-col :span="16"><div class="grid-content">Anything else about the venue you would like us to be aware of?</div></el-col>
      <el-col :span="8"><div class="grid-content">
        <el-input  placeholder="Please Input anything else about the venue you would like us to be aware of."  v-model="others"  clearable></el-input>
      </div></el-col>
    </el-row>
    <el-row>
      <el-col :span="24"><div class="grid-content">Please provide a contact name(s) and information for someone we can contact if we should have any questions with regards to the venue.</div></el-col>
    </el-row>
    <el-row>
      <el-col :span="4"><div class="grid-content">Name:</div></el-col>
      <el-col :span="4"><div class="grid-content"><el-input  placeholder="Please Input Name1."  v-model="name1"></el-input></div></el-col>
      <el-col :span="4"><div class="grid-content">Number:</div></el-col>
      <el-col :span="4"><div class="grid-content"><el-input  placeholder="Please Input Number1."  v-model="number1"></el-input></div></el-col>
      <el-col :span="4"><div class="grid-content">Email:</div></el-col>
      <el-col :span="4"><div class="grid-content"><el-input  placeholder="Please Input Email1."  v-model="email1"></el-input></div></el-col>
    </el-row>
    <el-row>
      <el-col :span="4"><div class="grid-content">Name:</div></el-col>
      <el-col :span="4"><div class="grid-content"><el-input  placeholder="Please Input Name2."  v-model="name2"></el-input></div></el-col>
      <el-col :span="4"><div class="grid-content">Number:</div></el-col>
      <el-col :span="4"><div class="grid-content"><el-input  placeholder="Please Input Number2."  v-model="number2"></el-input></div></el-col>
      <el-col :span="4"><div class="grid-content">Email:</div></el-col>
      <el-col :span="4"><div class="grid-content"><el-input  placeholder="Please Input Email2."  v-model="email2"></el-input></div></el-col>
    </el-row>
    <el-row justify="start">
      <el-col :span="24"><div class="grid-content">**Please provide a picture of each type of seat in the venue.</div></el-col>
    </el-row>
    <el-row>
      <el-upload action="https://jsonplaceholder.typicode.com/posts/" list-type="picture-card"
  :on-preview="handlePicture1Preview"
  :on-remove="handleRemove">
        <i class="el-icon-plus"></i>
      </el-upload>
      <el-dialog :visible.sync="dialogVisible">
        <img width="100%" :src="dialogImageUrl1" alt="">
      </el-dialog>
    </el-row>
    <el-row>
      <el-col :span="24"><div class="grid-content">**Please provide a seating chart of the venue.</div></el-col>
    </el-row>
    <el-row>
      <el-upload action="https://jsonplaceholder.typicode.com/posts/" list-type="picture-card"
  :on-preview="handlePicture2Preview"
  :on-remove="handleRemove">
        <i class="el-icon-plus"></i>
      </el-upload>
      <el-dialog :visible.sync="dialogVisible">
        <img width="100%" :src="dialogImageUrl2" alt="">
      </el-dialog>
    </el-row>
    <el-row>
      <el-col :span="4"><div class="grid-content"></div></el-col>
      <el-col :span="4"><div class="grid-content"></div></el-col>
      <el-col :span="4"><div class="grid-content"></div></el-col>
      <el-col :span="4"><div class="grid-content"></div></el-col>
      <el-col :span="4"><div class="grid-content"><el-button type="success" round>Save</el-button></div></el-col>
      <el-col :span="4"><div class="grid-content"><el-button @click="export_docx()" type="primary" round>Export MS Word</el-button></div></el-col>
    </el-row>
  </el-row>
</template>

<script>
export default {
  data() {
    return {
      venue_name: '',
      seat_cnt: '',
      section_cnt: '',
      stu_seat_cnt: '',
      is_holder: '1',
      is_wifi: '1',
      performance: '',
      holder_cnt: '',
      holder_pos: '',
      arm_width: '',
      arm_kind: '',
      rate: '',
      others: '',
      name1: '',
      number1: '',
      email1: '',
      name2: '',
      number2: '',
      email2: '',
      val1_1: '',
      val1_2: '',
      val1_3: '',
      val1_4: '',
      val2_1: '',
      val2_2: '',
      val2_3: '',
      val2_4: '',
      val3_1: '',
      val3_2: '',
      val3_3: '',
      val3_4: '',
      val4_1: '',
      val4_2: '',
      val4_3: '',
      val4_4: '',
      dialogImageUrl1: '',
      dialogImageUrl2: '',
      dialogVisible: false
    }
  },
  methods: {
    handleRemove() {
      //console.log(file, fileList);
    },
    handlePicture1Preview(file) {
      this.dialogImageUrl1 = file.url;
      this.dialogVisible = true;
    },
    handlePicture2Preview(file) {
      this.dialogImageUrl2 = file.url;
      this.dialogVisible = true;
    },
    export_docx(){
      
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
  .cell{
    line-height: 2
  }
  .main-title{
    font-size: 18px;
    font-weight: bold;
    line-height: 2;
  }
  img {
    width: 100%;
  }
  .el-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
    line-height: 2;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
  .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
</style>

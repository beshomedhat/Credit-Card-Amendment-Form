
// check if user selectPersonalDetailsAmendment
var selectPersonalDetailsAmendment = function(){
  let selectElement = document.querySelector("#amendmentType")
  let selectedValues = Array.from(selectElement.selectedOptions).map(option => option.value)
  let count = 0
  for(let i=0; i < selectedValues.length; i++){
    if(selectedValues[i] == "personalDetailsAmendment"){
      count+=1
    }
  }
  if(count>0){
    return true
  }
  else return false
}
// -------create email input----------------------------------------------
var createEmailInput = function(){
  let emailDiv = document.getElementById('emailInp')

  let emailFormLabe = document.createElement('div')
  emailFormLabe.classList.add("formLabel")

  let emailEngLabe = document.createElement('div')
  let emailArbLabe = document.createElement('div')

  emailDiv.appendChild(emailFormLabe)
  emailFormLabe.appendChild(emailEngLabe)
  emailFormLabe.appendChild(emailArbLabe)

  emailEngLabe.innerHTML="E-mail address:"
  emailArbLabe.innerHTML=":البريد الالكترونى"

  let emailInput = document.createElement('input')
  emailInput.classList.add("form-control")
  emailDiv.appendChild(emailInput)
  emailInput.setAttribute("type",'text')
  emailInput.setAttribute("id",'emailAdd')
}
// validateMainData
var validateMainData = function(){
  var basNoReq = /^[0-9][0-9]{5}$/;
  var utdNoReq = /^[0-9]+$/;
  // var dateReq = /^(0?[1-9]|[12][0-9]|3[01])[\/](0?[1-9]|1[012])[\/]\d{4}$/;
  var dateReq = /^(0?[1-9]|[12][0-9]|3[01])(0?[1-9]|1[012])\d{4}$/;
  var custNameReq = /^[a-zA-Z ]+$/;

  var baseNumber = document.querySelector('#baseNumber').value
  var utdNo = document.querySelector('#utdNo').value
  var date = document.querySelector('#date').value
  var custName = document.querySelector('#custName').value

  let colls="";
  if(basNoReq.test(baseNumber)==false)
      {
          $("#errorMainData").css({display:"block"})
          colls ="<p>base number must be numbers (6 digits) </p>"
          document.getElementById("errorMainData").innerHTML=colls;
          return false;
      }
  else if(utdNoReq.test(utdNo)==false & utdNo!='')
      {
          $("#errorMainData").css({display:"block"})
          colls ="<p>utd number must be numbers</p>"
          document.getElementById("errorMainData").innerHTML=colls;
          return false;
      }
  else if(dateReq.test(date)==false)
      {
          $("#errorMainData").css({display:"block"})
          colls ="<p>date must be a date like this ddmmyyyy </p>"
          document.getElementById("errorMainData").innerHTML=colls;
          return false;
      }
  else if(custNameReq.test(custName)==false)
  {
      $("#errorMainData").css({display:"block"})
      colls ="<p>custName must be alphabets </p>"
      document.getElementById("errorMainData").innerHTML=colls;
      return false;
  }   
  else
      {
          $("#errorMainData").css({display:"none"});
          return true;
      }

}

// validateCardData
var validateCardData = function(){
  var fourDigitReq = /^[0-9][0-9]{3}$/;
  var cardSerNoReq = /^[0-9]+$/;

  var firstFourCard1=document.querySelector('#firstFourCard1').value
  var lastFourCard1=document.querySelector('#lastFourCard1').value
  var cardSerNo1=document.querySelector('#cardSerNo1').value
  var firstFourCard2=document.querySelector('#firstFourCard2').value
  var lastFourCard2=document.querySelector('#lastFourCard2').value
  var cardSerNo2=document.querySelector('#cardSerNo2').value
  var firstFourCard3=document.querySelector('#firstFourCard3').value
  var lastFourCard3=document.querySelector('#lastFourCard3').value
  var cardSerNo3=document.querySelector('#cardSerNo3').value
  var firstFourCard4=document.querySelector('#firstFourCard4').value
  var lastFourCard4=document.querySelector('#lastFourCard4').value
  var cardSerNo4=document.querySelector('#cardSerNo4').value

  let colls="";
  var count=0;
  if(fourDigitReq.test(firstFourCard1)==true && fourDigitReq.test(lastFourCard1)==true && cardSerNoReq.test(cardSerNo1)==true){
      count+=1
  }
  else{
    document.querySelector('#firstFourCard1').value=''
    document.querySelector('#lastFourCard1').value=''
    document.querySelector('#cardSerNo1').value=''
  }
  if(fourDigitReq.test(firstFourCard2)==true && fourDigitReq.test(lastFourCard2)==true && cardSerNoReq.test(cardSerNo2)==true){
      count+=1
  }
  else{
    document.querySelector('#firstFourCard2').value=''
    document.querySelector('#lastFourCard2').value=''
    document.querySelector('#cardSerNo2').value=''
  }
  if(fourDigitReq.test(firstFourCard3)==true && fourDigitReq.test(lastFourCard3)==true && cardSerNoReq.test(cardSerNo3)==true){
      count+=1
  }
  else{
    document.querySelector('#firstFourCard3').value=''
    document.querySelector('#lastFourCard3').value=''
    document.querySelector('#cardSerNo3').value=''
  }
  if(fourDigitReq.test(firstFourCard4)==true && fourDigitReq.test(lastFourCard4)==true && cardSerNoReq.test(cardSerNo4)==true){
      count+=1
  }
  else{
    document.querySelector('#firstFourCard4').value=''
    document.querySelector('#lastFourCard4').value=''
    document.querySelector('#cardSerNo4').value=''
  }
  if(count>0){
    $("#errorCardDetails").css({display:"none"})
    return true
  }
  else{
    $("#errorCardDetails").css({display:"block"})
    colls =`<p>Enter at least one card details </p> <p> first four & last four -> just 4 digits and  cardSerNo3 is number</p>`
    document.getElementById("errorCardDetails").innerHTML=colls;
    return false;
  }


}

// validateAmendmentType
var validateAmendmentType = function(){
  let selectElement = document.querySelector("#amendmentType")
  let selectedValues = Array.from(selectElement.selectedOptions).map(option => option.value)
  if(selectedValues.length==0){
    $("#errorAmendmentType").css({display:"block"})
    var colls =`<div class="formLabel">
                  <div for="basic-url">Please choose your amendment type:</div>
                  <div for="basic-url">:من فضلك اختر نوع التعديل </div>
                </div>`
    document.getElementById("errorAmendmentType").innerHTML=colls;
    return false
  }
  else{
    $("#errorAmendmentType").css({display:"none"})
    return true 
  }  
}


// validatePersonalDetailsAmendmentData
var validatePersonalDetailsAmendmentData = function(){
  var alphaNumReq = /^[a-zA-Z0-9]+$/;
  var numReq = /^[0-9]+$/;
  var mobileReq = /^[0-9]{8}$/;
  var emailReq = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/

  var nameChange=document.querySelector('#nameChange').value
  var qidPersonalNo=document.querySelector('#qidPersonalNo').value
  var validAttach=document.querySelector('#validAttach').value
  var mobile=document.querySelector('#mobile').value
  var resNo=document.querySelector('#resNo').value
  var poBox=document.querySelector('#poBox').value
  var faxNo=document.querySelector('#faxNo').value
  var officeNo=document.querySelector('#officeNo').value
  var extension=document.querySelector('#extension').value
  var emailAdd=document.querySelector('#emailAdd').value


  let colls="";
  var count=0;
  if(alphaNumReq.test(nameChange)==true){
      count+=1
  }
  else{
    document.querySelector('#nameChange').value=''
  }
  if(alphaNumReq.test(qidPersonalNo)==true && validAttach!=""){
      count+=1
  }
  else{
    document.querySelector('#qidPersonalNo').value=''
  }
  if(mobileReq.test(mobile)){
      count+=1
  }
  else{
    document.querySelector('#mobile').value=''
  }
  if(alphaNumReq.test(resNo)){
      count+=1
  }
  else{
    document.querySelector('#resNo').value=''
  }
  if(numReq.test(poBox)){
      count+=1
  }
  else{
    document.querySelector('#poBox').value=''
  }
  if(numReq.test(faxNo)){
      count+=1
  }
  else{
    document.querySelector('#faxNo').value=''
  }
  if(numReq.test(officeNo)){
      count+=1
  }
  else{
    document.querySelector('#officeNo').value=''
  }
  if(numReq.test(extension)){
      count+=1
  }
  else{
    document.querySelector('#extension').value=''
  }
  if(emailReq.test(emailAdd)){
      count+=1
  }
  else{
    document.querySelector('#emailAdd').value=''
  }

  if(count>0){
    $("#errorPersonalDetailsAmendment").css({display:"none"})
    return true
  }
  else{
    $("#errorPersonalDetailsAmendment").css({display:"block"})
    colls =`
    <p>Name-Residence number just Alphanumeric / الاسم-رقم هاتف المنزل مكون من حروف وارقام فقط </p>
    <p>ID number /Passport number just Alphanumeric and select if valid or Attached / البطاقة الشخصية / جواز السفر مكون من حروف وارقام فقط واختر اذا كانت فعّال او مرفق</p>
    <p>Mobile number-P.O. Box-Fax number-Office number-Extension just numbers / رقم الجوال-ص.ب.-رقم الفاكس-رقم هاتف المكتب-الرقم الفرعى مكون من حروف وارقام فقط </p>
    <p>mobile range is 8 digits</p>
    `
    document.getElementById("errorPersonalDetailsAmendment").innerHTML=colls;
    return false;
  }
}

// check if user selectPersonalDetailsAmendment
var checkPersonalDetailsAmendment = function(){
  if(selectPersonalDetailsAmendment()){
    return validatePersonalDetailsAmendmentData()
  }
  else return true
}

async function fillForm() {
  if(validateMainData() && validateCardData() && validateAmendmentType() && checkPersonalDetailsAmendment()){
    const { PDFDocument } = PDFLib
    // Fetch the PDF with form fields
    const formUrl = 'https://files.fm/down.php?cf&i=nfr3wx7xv&n=test.pdf'
    const formPdfBytes = await fetch(formUrl).then(res => res.arrayBuffer())


    // Load a PDF with form fields
    const pdfDoc = await PDFDocument.load(formPdfBytes)


    // Get the form containing all the fields
    const form = pdfDoc.getForm()

    // Get all fields in the PDF by their names
    // -------mainData
    const baseNumber = form.getTextField('baseNo')
    const utdNo = form.getTextField('utdNo')
    const date = form.getTextField('date')
    const custName = form.getTextField('custName')
    // ----------cardData
    const firstFourCard1 = form.getTextField('firstFourCard1')
    const lastFourCard1 = form.getTextField('lastFourCard1')
    const cardSerNo1 = form.getTextField('cardSerNo1')
    const firstFourCard2 = form.getTextField('firstFourCard2')
    const lastFourCard2 = form.getTextField('lastFourCard2')
    const cardSerNo2 = form.getTextField('cardSerNo2')
    const firstFourCard3 = form.getTextField('firstFourCard3')
    const lastFourCard3 = form.getTextField('lastFourCard3')
    const cardSerNo3 = form.getTextField('cardSerNo3')
    const firstFourCard4 = form.getTextField('firstFourCard4')
    const lastFourCard4 = form.getTextField('lastFourCard4')
    const cardSerNo4 = form.getTextField('cardSerNo4')
    // -------------cardNoPresented

    const cardNoPresented = form.getCheckBox('cardNotPresented')
    document.querySelector('#cardNoPresented').checked ? cardNoPresented.check() : cardNoPresented.uncheck()
    

    //----------------------------------------------------------- 
    if(selectPersonalDetailsAmendment()){
      var nameChange=form.getTextField('nameChange')
      var qidPersonalNo=form.getTextField('qidPassportNo')
      var validAttach=form.getRadioGroup('validAttach')
      var mobile=form.getTextField('mobile')
      var resNo=form.getTextField('resNo')
      var poBox=form.getTextField('poBox')
      var faxNo=form.getTextField('faxNo')
      var officeNo=form.getTextField('officeNo')
      var extension=form.getTextField('ext')
      var emailAdd=form.getTextField('emailAdd')

      nameChange.setText(document.querySelector('#nameChange').value)
      qidPersonalNo.setText(document.querySelector('#qidPersonalNo').value)
      var validAttachVal=document.querySelector('#validAttach').value
      validAttach.select(validAttachVal)
      mobile.setText(document.querySelector('#mobile').value)
      resNo.setText(document.querySelector('#resNo').value)
      poBox.setText(document.querySelector('#poBox').value)
      faxNo.setText(document.querySelector('#faxNo').value)
      officeNo.setText(document.querySelector('#officeNo').value)
      extension.setText(document.querySelector('#extension').value)
      emailAdd.setText(document.querySelector('#emailAdd').value)
    }
    

    // ----------set mainData
    baseNumber.setText(document.querySelector('#baseNumber').value)
    utdNo.setText(document.querySelector('#utdNo').value)
    date.setText(document.querySelector('#date').value)
    custName.setText(document.querySelector('#custName').value)
    // --------------set cardData
    firstFourCard1.setText(document.querySelector('#firstFourCard1').value)
    lastFourCard1.setText(document.querySelector('#lastFourCard1').value)
    cardSerNo1.setText(document.querySelector('#cardSerNo1').value)
    firstFourCard2.setText(document.querySelector('#firstFourCard2').value)
    lastFourCard2.setText(document.querySelector('#lastFourCard2').value)
    cardSerNo2.setText(document.querySelector('#cardSerNo2').value)
    firstFourCard3.setText(document.querySelector('#firstFourCard3').value)
    lastFourCard3.setText(document.querySelector('#lastFourCard3').value)
    cardSerNo3.setText(document.querySelector('#cardSerNo3').value)
    firstFourCard4.setText(document.querySelector('#firstFourCard4').value)
    lastFourCard4.setText(document.querySelector('#lastFourCard4').value)
    cardSerNo4.setText(document.querySelector('#cardSerNo4').value)
    
    //-----------------------------------------------------------

    // Serialize the PDFDocument to bytes (a Uint8Array)
    const pdfBytes = await pdfDoc.save()

    // Trigger the browser to download the PDF document
    download(pdfBytes, "pdf-lib_form_creation_example.pdf", "application/pdf");
  }
}
document.querySelector("#submitBtn").addEventListener('click',function(){
  fillForm()
})

document.querySelector("#amendmentType").addEventListener('click',function(){
  let selectElement = document.querySelector("#amendmentType")
  let selectedValues = Array.from(selectElement.selectedOptions).map(option => option.value)
  let count = 0
  for(let i=0; i < selectedValues.length; i++){
    if(selectedValues[i] == "personalDetailsAmendment"){
      count+=1
    }
  }
  if(count>0){
    $("#personalDetailsAmendment").css({display:"block"})
  }
  else $("#personalDetailsAmendment").css({display:"none"})
})

// -------call create email input function----------------------------------------------
createEmailInput()

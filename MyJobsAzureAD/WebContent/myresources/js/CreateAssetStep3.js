
    oCreateAssetStep3Matrix = new sap.ui.commons.layout.MatrixLayout({
	id : "CreateAssetStep3Matrix",
	layoutFixed : true,
	columns : 5,
	width : '850px',
	widths : ['10px', '120px','350px','20px', '300px']
});


oCreateAssetStep3Matrix.createRow(new sap.m.Label(), new sap.m.Label(), new sap.m.Label(), new sap.m.Label(), new sap.m.Label({ text: "Comments" }));

var SystemIDSelect = new sap.m.Select('SystemIDSelect', {
    visible:false,
    width: "200px",
    items: [new sap.ui.core.Item({
        key: "NOTSELECTED",
        text: '--Select--'
    })],
    change: function () { onSystemIDSelectSelection() }

});

oCreateAssetStep3Matrix.createRow(new sap.m.Label(),new sap.m.Label('systemIDTextCreateAssetStep3',{ text: "System ID",visible:false }), SystemIDSelect);

var CreateAssetStep3DatePicker = new sap.m.DatePicker();
CreateAssetStep3DatePicker.setDisplayFormat("dd-MM-yyyy");
CreateAssetStep3DatePicker.setWidth("150px");
CreateAssetStep3DatePicker.attachChange(
		function(oEvent){
			if(oEvent.getParameter("invalidValue")){
				oEvent.oSource.setValueState(sap.ui.core.ValueState.Error);
			}else{
				oEvent.oSource.setValueState(sap.ui.core.ValueState.None);
			}
		}
);


var oRow = new sap.ui.commons.layout.MatrixLayoutRow();
oCreateAssetStep3Matrix.addRow(oRow);

var oCell = new sap.ui.commons.layout.MatrixLayoutCell({});
oCell.addContent(new sap.m.Label({text : "Install Date"}));

oRow.addCell(new sap.ui.commons.layout.MatrixLayoutCell());
oRow.addCell(oCell);

var oCell = new sap.ui.commons.layout.MatrixLayoutCell({});
oCell.addContent(CreateAssetStep3DatePicker);
oRow.addCell(oCell);
oRow.addCell(new sap.ui.commons.layout.MatrixLayoutCell());
var oCell = new sap.ui.commons.layout.MatrixLayoutCell({
	colSpan : 1,
	rowSpan : 3
});

var textCommentCreateAssetStep3 = new sap.m.TextArea("text_Comment",{maxLength:500, rows: 8,width : "270px", liveChange: [function (event) {
    calculateRemainingCharacterCountCreateAssetStep3();
}]})
oCell.addContent(textCommentCreateAssetStep3);
oRow.addCell(oCell);

var oRow = new sap.ui.commons.layout.MatrixLayoutRow();
oCreateAssetStep3Matrix.addRow(oRow);
var oCell = new sap.ui.commons.layout.MatrixLayoutCell({});
oCell.addContent(new sap.m.Label({text : "Serial Number"}));
oRow.addCell(new sap.ui.commons.layout.MatrixLayoutCell());
oRow.addCell(oCell);

var inputSerialNumber = new sap.m.Input("input_SerialNumber",
		{
		    maxLength: 50,
			width : "270px",
			type : sap.m.InputType.Input,
			enabled : true
		});

var oCell = new sap.ui.commons.layout.MatrixLayoutCell({});
oCell.addContent(inputSerialNumber);
oRow.addCell(oCell);

var oRow = new sap.ui.commons.layout.MatrixLayoutRow();
oCreateAssetStep3Matrix.addRow(oRow);
var oCell = new sap.ui.commons.layout.MatrixLayoutCell({});
oCell.addContent(new sap.m.Label({visible:false ,text : "Asset Tag"}));
oRow.addCell(new sap.ui.commons.layout.MatrixLayoutCell());
oRow.addCell(oCell);

var inputAssetTag = new sap.m.Input("input_AssetTag",
		{
		    maxLength: 40,
			width : "270px",
			type : sap.m.InputType.Input,
			enabled : true,
			visible : false
		});

var oCell = new sap.ui.commons.layout.MatrixLayoutCell({});
oCell.addContent(inputAssetTag);
oRow.addCell(oCell);

var gpsCoordsButtonCreateAssetStep3 = new sap.m.Button({
    visible : false,
	text: "GPS Co-ords",
    type: sap.m.ButtonType.Default,
    tap: [function (oEvt) {
        navigator.geolocation.getCurrentPosition(onGetCurrentPositionSuccessCreateAssetStep3, onGetCurrentPositionErrorCreateAssetStep3);
    }]
});

var inputGpsCreateAssetStep3 = new sap.m.Input("input_GpsCreateAssetStep3",
		{
		    maxLength: 80,
			width : "570px",
			type : sap.m.InputType.Input,
			enabled : true,
			visible : false,
		});

var oRow = new sap.ui.commons.layout.MatrixLayoutRow();
oCreateAssetStep3Matrix.addRow(oRow);
var oCell = new sap.ui.commons.layout.MatrixLayoutCell({});
oCell.addContent(gpsCoordsButtonCreateAssetStep3);
oRow.addCell(new sap.ui.commons.layout.MatrixLayoutCell());
oRow.addCell(oCell);

var oCell = new sap.ui.commons.layout.MatrixLayoutCell({colSpan : 3});
oCell.addContent(inputGpsCreateAssetStep3);
oRow.addCell(oCell);

var charactersRemainingLabelCreateAssetStep3 = new sap.m.Label({ text: "" });

oCreateAssetStep3Matrix.createRow(new sap.m.Label(), new sap.m.Label(), new sap.m.Label(),new sap.m.Label(), charactersRemainingLabelCreateAssetStep3);
//oCreateAssetStep3Matrix.createRow(new sap.m.Label({text : "1"}), new sap.m.Label({text : "2"}), new sap.m.Label({text : "3"}), new sap.m.Label({text : "4"}));


var formCreateAssetStep3 = new sap.m.Dialog("form_CreateAssetStep3",{
    subHeader: new sap.m.Bar({
        contentMiddle: [new sap.m.Label("CreateAssetStep3funcLocHeader", {
            text: ""
        })],
    }),
    horizontalScrolling:true,
    verticalScrolling:true,
    modal: true,
    contentWidth:"1em",

    buttons: [
new sap.m.Button({
    text: "Attach Document",
    type: sap.m.ButtonType.Accept,
    tap: [function (oEvt) { formDocumentsAC.open() }]
}),
new sap.m.Button({
    text: "Attach Photo",
    type: sap.m.ButtonType.Accept,
    tap: [function (oEvt) { formGetPhotoAC.open() }]
}),
new sap.m.Button("formCreateAssetStep3_Back" ,{
	
    text: "Back",
    type: sap.m.ButtonType.Accept,
    tap: [function (oEvt) { formCreateAssetStep3.close() }]
}),

					new sap.m.Button( {
					    text: "Cancel",
					    icon:"sap-icon://sys-cancel",
					    type: sap.m.ButtonType.Reject,
					    tap: [ function(oEvt) {	
					        if (sap.ui.getCore().getElementById('formCreateAssetStep3_Next').getVisible()) {
					            var msgCancel = "You have chosen to cancel part way through the creation process. ";
					            msgCancel += "Clicking YES will confirm you wish to cancel and return to the Home screen. ";
					            msgCancel += "Clicking NO will take you to the previous screen.";
					    	    CreateAssetStep3ConfirmCancel("", msgCancel)
					    	}

					   
					    	
					    	} ]   
					}),
					new sap.m.Button("formCreateAssetStep3_Next" ,{
						
					    text: "Next",
					    icon:"",
					    type: sap.m.ButtonType.Accept,
					    tap: [function (oEvt) {
					        currentAssetRecord.funcLocStringZINSTLOCN = getFunctionalLocationString();
					        if (CreateAssetStep3DatePicker.mProperties.dateValue != null)
					        {
					            currentAssetRecord.inbdtInstallDate =
                                    CreateAssetStep3DatePicker.mProperties.dateValue.getFullYear() +""+
                                (CreateAssetStep3DatePicker.mProperties.dateValue.getMonth() + 1)  +
                                CreateAssetStep3DatePicker.mProperties.dateValue.getDate() 
                                
					        }
					        
					        currentAssetRecord.sergeSerialNumber = inputSerialNumber.getValue();
                                currentAssetRecord.zzAssetTag = inputAssetTag.getValue();
                                currentAssetRecord.z_gpsNmea = inputGpsCreateAssetStep3.getValue();
                                if (textCommentCreateAssetStep3.getValue().length > 250)
                                {
                                    currentAssetRecord.zcomments1 = textCommentCreateAssetStep3.getValue().substr(0, 250);
                                    currentAssetRecord.zcomments2 = textCommentCreateAssetStep3.getValue().substr(250,textCommentCreateAssetStep3.getValue().length);
                                }
                                else
                                {
                                    currentAssetRecord.zcomments1 = textCommentCreateAssetStep3.getValue();
                                }
                                if (currentAssetRecord.zcomments1 != null && currentAssetRecord.zcomments1.length > 0) {
                                    currentAssetRecord.Zcomflg = "X";
                                }
                                else {
                                    currentAssetRecord.Zcomflg = null;
                                }
					        formCreateAssetStep4.open()
					    }
					    ]   
					})
					
					],					
    content:[
oCreateAssetStep3Matrix
            ],
            contentWidth:"1024px",
            contentHeight: "99%",
            beforeOpen: function () { populateCreateAssetStep3Controls() },
	  
      afterOpen:function(){  
          CreateAssetStep3SetDefaultValues();
	  } ,
	  beforeClose:function(){
		  try {
			 
		  }catch(err)
		  {}
	  }
	
	 })

function populateCreateAssetStep3Controls()
{
    if ((action == recordAction.EDIT || action == recordAction.AFTERDECOM || action == recordAction.COPY)
										&& currentAssetRecord.equipmentTypeDescriptionZOTDESC != null) {
       
    }
    else {
        
    }

    if (action == recordAction.NOA)
    {
        sap.ui.getCore().getElementById("formCreateAssetStep3_Back").setVisible(false);
    }
    else
    {
        sap.ui.getCore().getElementById("formCreateAssetStep3_Back").setVisible(true);
    }
    var dateString = "";
    if ((currentAssetRecord.inbdtInstallDate) && currentAssetRecord.inbdtInstallDate.length == 8)
    {
        dateString = currentAssetRecord.inbdtInstallDate.substr(6, 2) + "-" + currentAssetRecord.inbdtInstallDate.substr(4, 2) + "-" + currentAssetRecord.inbdtInstallDate.substr(0, 4)
    }
    CreateAssetStep3DatePicker.setValue(dateString)

    textCommentCreateAssetStep3.setValue($.grep([currentAssetRecord.zcomments1, currentAssetRecord.zcomments2], Boolean).join(""));
    inputSerialNumber.setValue(currentAssetRecord.sergeSerialNumber);
    inputAssetTag.setValue(currentAssetRecord.zzAssetTag);
    inputGpsCreateAssetStep3.setValue(currentAssetRecord.z_gpsNmea);


			}



function CreateAssetStep3ConfirmCancel(title, msg) {

    sap.m.MessageBox.show(msg, {
        icon: sap.m.MessageBox.Icon.WARNING,
        title: title,
        actions: [sap.m.MessageBox.Action.YES, sap.m.MessageBox.Action.NO],
        onClose: function (oAction) {

            if (oAction == "YES") {

                //Why would we set these fields when cancelling ? - I've commented them out
                //inputSerialNumber.setValue(currentAssetRecord.sergeSerialNumber);
                //inputAssetTag.setValue(currentAssetRecord.zzAssetTag);
                //inputGpsCreateAssetStep3.setValue(currentAssetRecord.z_gpsNmea);
                cancelAsset();
               
               
            }
        }
    }
           );
}
function CreateAssetStep3SetDefaultValues() {
    var otitle = "";
    var recordType = "";

    if (action == recordAction.EDIT) {
        recordType = "Asset - Step 3 of 4";
    }
    else {
        switch (currentAssetRecord.zascatAssetCategory) {
            case "A":
                recordType = "Parent Asset/Generic Plant Group - Step 3 of 4";
                break;
            case "B":
                recordType = "Support Asset - Step 3 of 4";
                break;
            case "C":
                recordType = "Parent Asset/Generic Plant Group - Step 3 of 4";
                break;
            case "D":
                recordType = "Generic Site - Step 3 of 4";
                break;
            case "E":
                recordType = "Unknown - Step 3 of 4";
                break;
            default:
        }
    }

    switch (action) {
        case recordAction.CREATE:
            otitle = "Create " + recordType;
            break;
        case recordAction.EDIT:
            otitle = "Edit " + recordType;
            break;
        case recordAction.AFTERDECOM:
            otitle = "Create " + recordType;
            break;
        case recordAction.COPY:
            otitle = "Copy " + recordType;
            break;
        case recordAction.NOA:
            otitle = "Not Accessible Asset Details";
            break;
        default:
    }
    if (action == recordAction.AFTERDECOM && (currentAssetRecord.zascatAssetCategory == "A" || currentAssetRecord.zascatAssetCategory == "B" || currentAssetRecord.zascatAssetCategory == "E"))
    {
        var decomissionedAssetSystemCodeNumber = currentAssetRecord.SystemCodeNumber;
        sap.ui.getCore().getElementById("SystemIDSelect").destroyItems();

        sap.ui.getCore().getElementById("SystemIDSelect").addItem(
                  new sap.ui.core.Item({
                      key: currentAssetRecord.SystemCodeNumber,
                      text: currentAssetRecord.SystemCodeNumber
                  }))

        //generateNextPlantSystemItemNumber(function (newSystemCodeNumber ) {
            sap.ui.getCore().getElementById("SystemIDSelect").addItem(
                new sap.ui.core.Item({
                    key: newSystemCodeNumber,
                    text: newSystemCodeNumber
                }))

            //we don't need to do the below any more as generateNextPlantSystemItemNumber now doesn't change the  currentAssetRecord.SystemCodeNumber
            //generateNextPlantSystemItemNumber sets currentAssetRecord.SystemCodeNumber, so set it back to the original value
           // currentAssetRecord.SystemCodeNumber = decomissionedAssetSystemCodeNumber;

            sap.ui.getCore().getElementById("SystemIDSelect").setVisible(true);
            sap.ui.getCore().getElementById("systemIDTextCreateAssetStep3").setVisible(true);
        //});
    }
    else
    {
        sap.ui.getCore().getElementById("SystemIDSelect").setVisible(false);
        sap.ui.getCore().getElementById("systemIDTextCreateAssetStep3").setVisible(false);
    }
        
    formCreateAssetStep3.setTitle(otitle);
    
    var subTitleString = getFunctionalLocationString()
    if ((action == recordAction.EDIT )) {
        subTitleString =  currentAssetRecord.originalFuncLocStringZINSTLOCN
    }
    sap.ui.getCore().getElementById("CreateAssetStep3funcLocHeader").setText(subTitleString);

}

function onGetCurrentPositionSuccessCreateAssetStep3(position)
{
    inputGpsCreateAssetStep3.setValue(position.coords.longitude + " " + position.coords.latitude);
}
    
function onGetCurrentPositionErrorCreateAssetStep3(error)
{
    inputGpsCreateAssetStep3.setValue(error.message);
}

function calculateRemainingCharacterCountCreateAssetStep3() {
    
    var charCount = textCommentCreateAssetStep3.getValue().length;
    var remainingCharCount;
    remainingCharCount = 500 - charCount;
    if (remainingCharCount < 0) { remainingCharCount =0}
    charactersRemainingLabelCreateAssetStep3.setText("Remaining Characters Count: " + remainingCharCount);
   
}
const api = {
    // success: True,
    data: {
        filters: [
            {
                course_id: 1,
                course_name: "WBCS",
                subjects: [
                    {
                        id: 17,
                        name: "English"
                    },
                    {
                        id: 18,
                        name: "Maths"
                    },
                    {
                        id: 19,
                        name: "Geography"
                    },
                ],
            },
        ],
        assigned_notes: [
            {
                routine_id: 1712,
                course_id: 1,
                course_name: "wbcs",
                subject_id: 17,
                subject_name: "English",
                topic_name: "xyz",
                class_date: "Sep 28",
                start_time: "1:00 pm",
                end_time: "2:00 pm",
                notes: [
                    {
                        note_title: "war",
                        note_url: "asdfghjkl"
                    },
                    {
                        note_title: "fight",
                        note_url: "vcxertl"
                    },
                ]
            },
            {
                routine_id: 1712,
                course_id: 1,
                course_name: "wbcs",
                subject_id: 17,
                subject_name: "English",
                topic_name: "xyz",
                class_date: "Sep 28",
                start_time: "1:05 pm",
                end_time: "2:00 pm",
                notes: [
                    {
                        note_title: "war",
                        note_url: "asdfghjkl"
                    },
                    {
                        note_title: "fight",
                        note_url: "vcxertl"
                    },
                ]
            },
            {
                routine_id: 1712,
                course_id: 1,
                course_name: "wbcs",
                subject_id: 17,
                subject_name: "English",
                topic_name: "xyz",
                class_date: "Sep 28",
                start_time: "1:00 pm",
                end_time: "2:00 pm",
                notes: [
                    {
                        note_title: "war",
                        note_url: "asdfghjkl"
                    },
                    {
                        note_title: "fight",
                        note_url: "vcxertl"
                    },
                ]
            },
            {
                routine_id: 1712,
                course_id: 1,
                course_name: "wbcs",
                subject_id: 18,
                subject_name: "Maths",
                topic_name: "xyz",
                class_date: "Sep 23",
                start_time: "1:55 pm",
                end_time: "2:55 pm",
                notes: [
                    {
                        note_title: "war",
                        note_url: "asdfghjkl"
                    },
                    {
                        note_title: "fight",
                        note_url: "vcxertl"
                    },
                ]
            },
            {
                routine_id: 1712,
                course_id: 1,
                course_name: "wbcs",
                subject_id: 17,
                subject_name: "Maths",
                topic_name: "xyz",
                class_date: "Sep 23",
                start_time: "1:55 pm",
                end_time: "2:55 pm",
                notes: [
                    {
                        note_title: "war",
                        note_url: "asdfghjkl"
                    },
                    {
                        note_title: "fight",
                        note_url: "vcxertl"
                    },
                ]
            },
        ]
    }
}

window.onload = function populate_all() {
    assign_notes_arr = api.data.assigned_notes
    console.log(assign_notes_arr);
    for(let i=0 ; i<assign_notes_arr.length;i++){
        let html = "";
        subjectname =  assign_notes_arr[i].subject_name
        time = assign_notes_arr[i].start_time
        console.log(subjectname,time)
        if(assign_notes_arr[i].subject_name == "English"){
            cards="english-card"
        }
        if(assign_notes_arr[i].subject_name == "Maths"){
            cards="maths-card"
        }
        if(assign_notes_arr[i].subject_name == "Geography"){
            cards="geography-card"
        }
        
        html += `
            <div class="col-md-4 mb-3 hidden ${cards}">
                <div class="card flex-md-row box-shadow h-md-250">
                    <div class="card-body d-flex flex-column align-items-start">
                        <strong class="d-inline-block mb-2">Toppers English Strategy for IAS Mains Lorem Ipsum is
                            simply</strong>
                        <p class="card-text mb-2">Computer & Information technology</p>
                        <!-- <div class="mb-1 text-muted">Nov 12</div> -->
                        <div class="row w-100 mb-2">
                            <div class="col-md-12 p-0">
                                <span class="card-text mb-auto teac-color p-0  w-40">Praveen Bose</span>
                                <span class="rounded card-text mb-auto teac-color px-2 py-1 w-40 b-color">${subjectname}</span>
                            </div>
                        </div>
                        <div class="row w-100 p-0">
                            <div class="col-md-7 p-0 d-flex align-items-center">
                                <i class="fa-regular fa-clock"></i>
                                <span class="clock-date ml-1">Sep 28, ${time}</span>
                            </div>
                            <div class="col-md-5 p-0 text-right respo">
                                <button type="button" class="btn btn-spec btn-sm respo">View</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `
        $('.mainbody').append(html);
    }
    
}

// function for hiding all the cards
function hide(){
    let elements = document.querySelectorAll('.hidden');
    for (let i =0 ;i < elements.length ; i++){
        elements[i].style.display = "none";
    }
}
// function for showing all the cards
function showall(){
    let elements = document.querySelectorAll('.hidden');
    for (let i =0 ;i < elements.length ; i++){
        elements[i].style.display = "block";
    }
}
document.getElementById("sub-items").onchange = function() {
    // hiding all
    hide();
    //for subject
    if (this.value == 'subject') {
        showall();
    }
    // for english
    if (this.value == 'english') {
        var engcard = document.querySelectorAll('.english-card');
        for (let i = 0; i < engcard.length; i++) {
            engcard[i].style.display = "block";
          }

    }
    // for maths
    if (this.value == 'maths') {
        var mathscard = document.querySelectorAll('.maths-card');
        for (let i = 0; i < mathscard.length; i++) {
            mathscard[i].style.display = "block";
        }

    }
    //for geography
    if (this.value == 'geography') {
        var geocard = document.querySelectorAll('.geography-card');
        for (let i = 0; i < geocard.length; i++) {
            geocard[i].style.display = "block";
        }
    }
}










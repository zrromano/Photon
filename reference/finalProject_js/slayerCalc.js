function runescapeSlayerCalc(){
	let pointsNeeded = $("#points").val();
    let currentStreak = $("#streak").val();
    let pointsPerTask = 0;
    let masters = document.getElementsByName("master");
    
    for(let i = 0; i < 7; i++){
        if(masters[i].checked){
            pointsPerTask = Number(masters[i].value);
            break;
        }
    }
    
    let pointsEarned = 0;
    let tasksRequired = 0;
    if(pointsPerTask == 2){
        while(pointsEarned < pointsNeeded){
            currentStreak++;
            if(currentStreak % 50 == 0)
                pointsEarned += 15;
            else if(currentStreak % 10 == 0)
                pointsEarned += 5;
            else if(currentStreak >= 5)
                pointsEarned += 2;
            tasksRequired++;
        }
        $("#output").val(tasksRequired);
        return;
    } 
      while(pointsEarned < pointsNeeded){
        currentStreak++;
        if(currentStreak % 50 == 0)
            pointsEarned += pointsPerTask *15;
        else if(currentStreak % 10 == 0)
            pointsEarned += pointsPerTask * 5;
        else if(currentStreak >= 5)
            pointsEarned += pointsPerTask;
        tasksRequired++;
    }
    $("#output").val(tasksRequired);
}
function calc(){

    ganancia_mensual = document.getElementById("input_step1").value;
    r_step1 = document.getElementById("r_step1");

    r_step1.textContent = ganancia_mensual * 12;

    monto_mensual = document.getElementById("input_step2").value;

    vp = parseFloat(document.getElementById("input_step3_1").value);
    r = parseFloat(document.getElementById("input_step3_2").value);
    n = parseInt(document.getElementById("input_step3_3").value);
    vf = (vp * Math.pow((1 + r), n)).toFixed(2)

    r_step3 = document.getElementById("r_step3");

    r_step3.textContent = vf

    ingresos_existentes = document.getElementById("input_step4").value;
    
    final_step4 = vf - ingresos_existentes;
    r_step4 = document.getElementById("r_step4");

    r_step4.textContent = final_step4;

    r_step5 = document.getElementById("r_step5");
    r_step5.textContent = (final_step4 * 25).toFixed(2)
}
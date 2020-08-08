function randomiza(n) {
	var ranNum = Math.round(Math.random()*n);
	return ranNum;
}

function mod(dividendo,divisor) {
	return Math.round(dividendo - (Math.floor(dividendo/divisor)*divisor));
}


function predict(cpf) {

	cpf = cpf.replace(/\D/g, '');
	cpf = cpf.replace('-', '');
	cpf = cpf.split('');
	
	var n = 9;
	
	var n1 = '';
	var n2 = '';
	var n3 = '';
	var n4 = '';
	var n5 = '';
	var n6 = '';
	var n7 = '';
	var n8 = '';
	var n9 = '';
	
    n1 = cpf[0];
	n2 = cpf[1];
	n3 = cpf[2];
	n4 = cpf[3];
	n5 = cpf[4];
	n6 = cpf[5];
	n7 = cpf[6];
	n8 = cpf[7];
	n9 = cpf[8];
	
	var d1 = n9*2+n8*3+n7*4+n6*5+n5*6+n4*7+n3*8+n2*9+n1*10;
	d1 = 11 - ( mod(d1,11) );
	if (d1>=10) d1 = 0;
	var d2 = d1*2+n9*3+n8*4+n7*5+n6*6+n5*7+n4*8+n3*9+n2*10+n1*11;
	d2 = 11 - ( mod(d2,11) );
	if (d2>=10) d2 = 0;
	retorno = '';
	
 cpf = ''+n1+n2+n3+n4+n5+n6+n7+n8+n9+d1+d2;
	if (cpf.length == 11) {
	return(cpf);
	}

}


function validaCpfCnpj(val) {
    if (val.length == 11) {
        var cpf = val.trim();
		
        cpf = cpf.replace(/\D/g, '');
        cpf = cpf.replace('-', '');
        cpf = cpf.split('');
        
        var v1 = 0;
        var v2 = 0;
        var aux = false;
        
        for (var i = 1; cpf.length > i; i++) {
            if (cpf[i - 1] != cpf[i]) {
                aux = true;   
			}
		} 
        
        if (aux == false) {
            return false; 
		} 
        
        for (var i = 0, p = 10; (cpf.length - 2) > i; i++, p--) {
            v1 += cpf[i] * p; 
		} 
        
        v1 = ((v1 * 10) % 11);
        
        if (v1 == 10) {
            v1 = 0; 
		}
        
        if (v1 != cpf[9]) {
            return false; 
		} 
        
        for (var i = 0, p = 11; (cpf.length - 1) > i; i++, p--) {
            v2 += cpf[i] * p; 
		} 
        
        v2 = ((v2 * 10) % 11);
        
        if (v2 == 10) {
            v2 = 0; 
		}
        
        if (v2 != cpf[10]) {
            return false; 
			} else {   
            return true; 
		}
		} else if (val.length == 14) {
        var cnpj = val.trim();
        
        cnpj = cnpj.replace(/\./g, '');
        cnpj = cnpj.replace('-', '');
        cnpj = cnpj.replace('/', ''); 
        cnpj = cnpj.split(''); 
        
        var v1 = 0;
        var v2 = 0;
        var aux = false;
        
        for (var i = 1; cnpj.length > i; i++) { 
            if (cnpj[i - 1] != cnpj[i]) {  
                aux = true;   
			} 
		} 
        
        if (aux == false) {  
            return false; 
		}
        
        for (var i = 0, p1 = 5, p2 = 13; (cnpj.length - 2) > i; i++, p1--, p2--) {
            if (p1 >= 2) {  
                v1 += cnpj[i] * p1;  
				} else {  
                v1 += cnpj[i] * p2;  
			} 
		} 
        
        v1 = (v1 % 11);
        
        if (v1 < 2) { 
            v1 = 0; 
			} else { 
            v1 = (11 - v1); 
		} 
        
        if (v1 != cnpj[12]) {  
            return false; 
		} 
        
        for (var i = 0, p1 = 6, p2 = 14; (cnpj.length - 1) > i; i++, p1--, p2--) { 
            if (p1 >= 2) {  
                v2 += cnpj[i] * p1;  
				} else {   
                v2 += cnpj[i] * p2; 
			} 
		}
        
        v2 = (v2 % 11); 
        
        if (v2 < 2) {  
            v2 = 0;
			} else { 
            v2 = (11 - v2); 
		} 
        
        if (v2 != cnpj[13]) {   
            return false; 
			} else {  
            return true; 
		}
		} else {
        return false;
		}
		}	
		
		function getCookie(cname) {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');
  for(var i = 0; i <ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}
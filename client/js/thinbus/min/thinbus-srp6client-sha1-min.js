function SRP6JavascriptClientSessionSHA1(){}SRP6JavascriptClientSessionSHA1.prototype=new SRP6JavascriptClientSession();SRP6JavascriptClientSessionSHA1.prototype.N=function(){return new BigInteger(SRP6CryptoParams.N_base10,10)};SRP6JavascriptClientSessionSHA1.prototype.g=function(){return new BigInteger(SRP6CryptoParams.g_base10,10)};SRP6JavascriptClientSessionSHA1.prototype.H=function(a){return CryptoJS.SHA1(a).toString().toLowerCase()};SRP6JavascriptClientSessionSHA1.prototype.k=new BigInteger(SRP6CryptoParams.k_base16,16);
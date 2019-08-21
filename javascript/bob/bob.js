export const hey = text => {
    text = text.replace(/\\n\\t\\r\\\'/g,"").replace(/[ ]{2,}/g, " ").trim()
    
    if(text.length == 0){ return "Fine. Be that way!"}
    if(/^[0-9]*\??$/.test(text)){ return "Sure."}
    if(/^[\W]*\?$/.test(text)){ return "Sure."}
    if(/^[A-Z\W 0-9]*\?$/.test(text)){ return "Calm down, I know what I'm doing!" }
    if(/^[A-Za-z0-9\W ]*/.test(text) && text[text.length - 1] == "?"){ return "Sure." }
    if(/^[0-9 \W]*[\.\!0-9]?$/.test(text)){ return "Whatever."}
    if(/^[A-Z\W 0-9]*\!?$/.test(text)){ return "Whoa, chill out!" }
    return "Whatever."
    
}
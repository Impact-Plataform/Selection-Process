--Registry
CREATE TABLE CANDIDATES
(
    --base
    id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
    name VARCHAR(1024) NOT NULL,    
    birthdate DATE DEFAULT NULL ,
    email VARCHAR(256) NOT NULL,
    
    --add info
    phone VARCHAR(15) NOT NULL,  
    how_knew_plataforma  VARCHAR(32) DEFAULT NULL,
    -- (...)

    --control
    enable BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP    
);

CREATE TABLE RESULTS
(
    id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
    note INT NOT NULL,
    FOREIGN KEY(id) REFERENCES CANDIDATES(id)
);

CREATE TABLE QUESTIONS
(
    --base
    id SERIAL PRIMARY KEY,
    question TEXT,
    answer TEXT,
    --control
    enable BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP     
);
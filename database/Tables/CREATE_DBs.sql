--Registry
CREATE TABLE CANDIDATES
(
    --base
    id PRIMARY KEY,
    name VARCHAR(1024) NOT NULL,    
    birthdate DATE NOT NULL,
    email VARCHAR(256) NOT NULL,
    
    --add info
    phone VARCHAR(15) NOT NULL,    
    interest VARCHAR(256) DEFAULT NULL,
    knowledge TEXT DEFAULT NULL,
    how_knew_plataforma  VARCHAR(32) DEFAULT NULL,
    address_city VARCHAR(32) DEFAULT NULL,
    speak_english VARCHAR(32) DEFAULT NULL,
    -- (...)

    --control
    enable BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP    
);

CREATE TABLE RESULTS
(
    id INT PRIMARY KEY,
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
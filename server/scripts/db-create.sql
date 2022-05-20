--Email
CREATE TABLE EMAILS_OUTBOX
(
    --base
    id SERIAL PRIMARY KEY,
    header_from VARCHAR(256) NOT NULL,
    header_to VARCHAR(256) NOT NULL,
    header_subject VARCHAR(256) NOT NULL,    
    body TEXT NOT NULL,
    
    --add info
    last_sent_attempt TIMESTAMP WITH TIME ZONE DEFAULT NULL,
    fisrt_sent_attempt TIMESTAMP WITH TIME ZONE DEFAULT NULL,
    attempts INT DEFAULT 0,
    
    --control
    enable BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP    
);

CREATE TABLE EMAILS_SENT
(
    --base
    id INT PRIMARY KEY,
    header_from VARCHAR(256) NOT NULL,
    header_to VARCHAR(256) NOT NULL,
    header_subject VARCHAR(256) NOT NULL,    
    body TEXT NOT NULL,
    
    --add info
    fisrt_sent_attempt TIMESTAMP WITH TIME ZONE DEFAULT NULL,
    attempts INT DEFAULT 1,
    
    --control
    enable BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP    
);

--Questionaire
CREATE TABLE QUESTIONS
(
    --base
    id SERIAL PRIMARY KEY,
    title VARCHAR(1024) NOT NULL,    
    /*
    0   SingleOption
    1   MultiOption
    2   OpenText
    */
    questionType int default 0, 

    --control
    enable BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP 
);

CREATE TABLE OPTIONS
(
    --base    
    id SERIAL PRIMARY KEY,
    value VARCHAR(1024) NOT NULL,

    --control
    enable BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP 
);

CREATE TABLE QUESTIONS_OPTIONS
(
    --base    
    questionId INT REFERENCES QUESTIONS(ID),
    optionId  INT REFERENCES OPTIONS(ID),
    value INT DEFAULT 0, --VALUE TO SUM

    --control
    enable BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP 
);

CREATE TABLE FORMS
(
    --base    
    id SERIAL PRIMARY KEY,    
    title VARCHAR(1024) NOT NULL,
    description TEXT DEFAULT NULL,

    --control
    enable BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP 
);

CREATE TABLE FORMS_QUESTIONS
(
    --base
    formId INT REFERENCES FORMS(ID),
    questionId INT REFERENCES QUESTIONS(ID),
    
    --control
    enable BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP     
);

CREATE TABLE RESULTS
(

);

--Registry
CREATE TABLE CANDIDATES
(
    --base
    id SERIAL PRIMARY KEY,
    name VARCHAR(1024) NOT NULL,    
    birthdate DATE NOT NULL,
    email VARCHAR(256) NOT NULL,
    
    --add info
    phone VARCHAR(15) DEFAULT NULL,    
    address_street VARCHAR(256) DEFAULT NULL,
    address_number VARCHAR(16) DEFAULT NULL,
    address_district VARCHAR(32) DEFAULT NULL,
    address_city VARCHAR(32) DEFAULT NULL,
    address_state VARCHAR(32) DEFAULT NULL,
    address_obs VARCHAR(32) DEFAULT NULL,    
    -- (...)

    --control
    enable BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP    
);
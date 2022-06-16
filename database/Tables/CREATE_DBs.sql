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
    speak_english char(3) DEFAULT NULL,
    -- (...)

    --control
    enable BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP    
);

CREATE TABLE RESULTS
(
    candidate_id uuid PRIMARY KEY,
    note INT NOT NULL,
    FOREIGN KEY(id) REFERENCES CANDIDATES(id)
);

CREATE TABLE RESPONSES
(
    --base
    candidate_id uuid NOT NULL REFERENCES candidates(id),
    question_id INT NOT NULL REFERENCES questions(id),
    response TEXT NOT NULL,
    --control
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP     
);

CREATE TABLE QUESTIONS
(
    --base
    id SERIAL PRIMARY KEY,
    question TEXT,
    options TEXT,
    answer TEXT,
    --control
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP     
);

CREATE TABLE EMAIL_TEMPLATES
(
    --base
    id SERIAL PRIMARY KEY,
    header_to VARCHAR(256) NOT NULL,
    header_subject VARCHAR(256) NOT NULL,    
    body TEXT NOT NULL
);

CREATE TABLE CANDIDATE_STATUS
(
    candidate_id NOT NULL,
    test_sent boolean DEFAULT FALSE
);
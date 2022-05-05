import pandas as pd

featuredf = pd.read_csv("/Users/somyaranjanrout/Documents/University/Agile Software Development/Assignment/Prescript/App/Code/backend/api/datasets/features.csv") 
traindf = pd.read_csv("/Users/somyaranjanrout/Documents/University/Agile Software Development/Assignment/Prescript/App/Code/backend/api/datasets/train.csv")

class Result(dict): 
  
    # __init__ function 
    def __init__(self): 
            self = dict() 
            
    # Function to add key:value 
    def add(self, key, value): 
        self[key] = value 

result_obj = Result()

#Function for annotate the text
def  get_patient_annotation(patient_note, case_no, pn_num = 0):
    #list for new annotations
    annotation_new = []
    
    #Storing the all feature values in the following case
    features_set = featuredf[featuredf['case_num'] == case_no]['feature_num'].unique()
    
    #for loop for each feature
    for f_id in features_set:
        #getting all annotations from train dataset to find new annotations
        annotations = traindf[traindf['feature_num'] == f_id]['annotation'].tolist()
        
        #set for storing previous annotation in following feature
        annotation_texts = set()
        for an in annotations:
            anno = eval(an)
            #storing each annotations
            for at in anno:
                annotation_texts.add(at) 
                
        # new list variables for storing new annotations and their location
        pn_annotation = []
        txt_location = []
        pn_text = patient_note
        text = pn_text.split(".")
        #searching for the annotation in the given text
        for at in set(annotation_texts):
            pn_text = ".".join(text)
            start = pn_text.find(at)
            if (start > 0 ):
                    
                    #adding annotation and location only if the is text present
                pn_annotation.append(at)
                txt_location.append(f'{start} {start+len(at)}')
                break
        #appending the data add new annotation
        if len(pn_annotation) > 0:
            annotation_new.append([f'{pn_num:04d}_{f_id:03d}', case_no, pn_num, f_id, pn_annotation, txt_location ])
        else:
             annotation_new.append([f'{pn_num:04d}_{f_id:03d}', case_no, pn_num, f_id, [], [] ])
    return annotation_new

#Displaying the features and annotation of given dataset
def display_anno_data(anno_patient):
    #obtaining the case_no fron the dataset
    case_no = anno_patient[0][1]
    
    #Storing the all feature values in the following case
    feature_set = featuredf[featuredf['case_num']==case_no]['feature_text'].unique().tolist()
  
    #Diplaying each feature along with the annotated feature value from the dataset
    for i in range(len(anno_patient)):
        
        if len(anno_patient[i][4]) != 0: 
            result_obj.add(feature_set[i], anno_patient[i][4][0])

#Function for annotate the text
def  get_patient_features(patient_note):
    #list for new annotations
    case_set = featuredf['case_num'].unique()
    case_counter = []
    p_text = patient_note.lower()
    for c_no in case_set:
        #Storing the all feature values in the following case
        features_set = featuredf[featuredf['case_num'] == c_no]['feature_num'].unique()
        counter=0      

        #for loop for each feature
        for feature in features_set:
            ann_set = traindf[traindf['feature_num'] == feature]['annotation'].tolist()
            #set for storing previous annotation in following feature
            annotation_texts = set()
            for an in ann_set:
                anno = eval(an)
                #storing each annotations
                for at in anno:
                    annotation_texts.add(at) 
            for word_list in annotation_texts:
                if p_text.find(word_list)>0:
                    counter+=1
        case_counter.append(counter)
    case_no = case_counter.index(max(case_counter))
    pn_anno = get_patient_annotation(patient_note,case_no)
    #Displaying the features and annotations
    display_anno_data(pn_anno)
    #calculating the score
    patient_untrain_score(pn_anno)

"""### Patient Score calculation"""

# Score function for un-trained data
def patient_untrain_score(df):
    sum = 0
    #getting case no from dataset
    case_no = df[0][1] 
    
    #Storing the all feature values in the following case
    features_set = featuredf[featuredf['case_num'] == case_no]['feature_num'].unique()
     #length of features multiplied by 10
    size = len(features_set) * 10
       
    #checking the patient annotate data  if the feature is present then patient score is increased by 10
    for i in range(len(df)):
        if len(df[i][4]) == 1:
            sum+=10
    #calculating the score
    global score
    score = (sum/size)*100



def get_note_data():
    return result_obj

def get_score():
    return score

def set_clean():
    
    return 0
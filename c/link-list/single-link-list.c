#include <stdio.h>
#include <stdlib.h>


void printList(void);
void insterFirst(int data);
void insterEnd(int data);
void insertAt(int pos, int data);
void deleteForData(int data);

struct node{
    int data;
    struct node *next;
};

struct node *head = NULL;
struct node *current = NULL;

void main(void) {
    insterFirst(3);
    insterFirst(4);
    insterFirst(4);
    insterFirst(4);
    insterFirst(4);
    insterEnd(5);
    insterEnd(6);
    printList();
    insertAt(0,14);
    printList();
    deleteForData(3);
    deleteForData(5);
    printList();
}

void insterFirst(int data) {

    struct node *link = (struct node*) malloc(sizeof(struct node));

    link->data = data;

    link->next = head;

    head = link;
}

void insterEnd(int data) {

    struct node *temp = (struct node*) malloc(sizeof(struct node));
    struct node *ptr = NULL;

    temp->data = data;
    temp->next = NULL;

    if(head == NULL) {
        head = temp;
    } else {
        ptr = head;
        while (ptr->next != NULL) {
            ptr = ptr->next;
        }
        ptr->next = temp;
    }
}

void printList(void) {
    struct node *ptr = head;
    printf("[");

    while (ptr != NULL) {
        printf("%d ",ptr->data);
        ptr = ptr->next;
    }

    printf("]\n");
}

void insertAt(int pos, int data) {
    struct node *ptr = NULL;
    struct node *temp = (struct node*) malloc(sizeof(struct node));

    temp->data = data;

    if(pos == 0 ) {
        temp->next = head;
        head = temp;
    } else {
        ptr=head;
        int i;
        for(i=0; i < pos - 1; i++) {
            ptr = ptr->next;
            if(ptr == NULL) {
                printf("Node Not Found \n");
                return;
            }
        }
        temp->next = ptr->next;
        ptr->next = temp;
    }
}

void deleteForData(int data) {
    struct node *ptr = NULL;
    struct node *prev = NULL;
    
    ptr = head;

    if(ptr != NULL && ptr->data == data) {
        head = ptr->next;
        return;
    }

    while (ptr != NULL && ptr->data != data) {
        prev = ptr;
        ptr = ptr->next;
    }
    
    if(ptr == NULL ) {
        return;
    }

    prev->next = ptr->next;
}